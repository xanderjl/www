import type { APIRoute } from "astro"
import { getCollection, getEntry } from "astro:content"

import { token } from "@/styled-system/tokens"
import { formatDate } from "@/utils/formatDate"
import { PDF } from "@/utils/pdf"

// Source data
const workHistory = await getCollection("work-history")
const experience = workHistory.sort(
  (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime()
)
const {
  data: { name, socials, education, email, phone, icons }
} = await getEntry("resume-data", "index")

const contentDisposition = `inline; filename="xander-low-resume-${new Date().getFullYear()}.pdf"`

// SVG and layout props
const margin = 36
const iconSize = 24

// Typography
const h1 = 36
const h2 = 24
const h3 = 20
const body = 12

const highlightColor = token("colors.red.100")

// Instantiate a new PDFDocument
const doc = new PDF({
  size: "A4",
  margin,
  info: {
    Title: `Xander Low Resume ${new Date().getFullYear()}`
  }
})

export const GET: APIRoute = async () => {
  // Heading
  doc.fontSize(h1).text(name)

  // Socials
  doc
    .link(doc.x, doc.y, iconSize, iconSize, socials["github"].url)
    .addSVG(icons["github"], doc.x, doc.y)

  doc
    .link(doc.x + iconSize, doc.y, iconSize, iconSize, socials["linkedin"].url)
    .addSVG(icons["linkedin"], doc.x + iconSize, doc.y)

  doc.moveUp()

  // Contact info
  // Phone
  doc.addSVG(
    icons["phone"],
    doc.page.width - margin * 5.5,
    doc.y - iconSize * 0.125
  )
  doc
    .fontSize(body)
    .highlight(
      doc.page.width - margin - doc.widthOfString(email),
      doc.y + doc.heightOfString(phone) * 0.5,
      doc.widthOfString(email),
      doc.heightOfString(phone) * 0.5,
      { color: highlightColor }
    )
    .text(phone, {
      link: `tel:${phone}`,
      align: "right"
    })

  doc.moveDown(0.25)

  // Email
  doc.addSVG(
    icons["email"],
    doc.page.width - margin * 5.5,
    doc.y - iconSize * 0.125
  )
  doc
    .fontSize(body)
    .highlight(
      doc.page.width - margin - doc.widthOfString(email),
      doc.y + doc.heightOfString(email) * 0.5,
      doc.widthOfString(email),
      doc.heightOfString(email) * 0.5,
      { color: highlightColor }
    )
    .text(email, {
      link: `mailto:${email}`,
      align: "right"
    })

  doc.moveDown(4)

  doc.fontSize(h2).text("Experience")

  experience.map(
    ({ data: { client, endDate, responsibilities, role, startDate } }) => {
      // Heading
      doc.fontSize(h3).text(`${client} — ${role}`)

      // Start and end date
      doc
        .fontSize(body)
        .text(`${formatDate(startDate)} - ${formatDate(endDate)}`)

      doc.moveDown()

      // Responsibilities
      doc
        .fontSize(body)
        .list(responsibilities, { bulletIndent: 10, bulletRadius: 2 })

      doc.moveDown(2)
    }
  )

  // Education
  doc.fontSize(h2).text("Education")
  doc.fontSize(body).text(education.school)
  doc.fontSize(body).text(education.program)
  doc
    .fontSize(body)
    .text(
      `${formatDate(education.startDate)} - ${formatDate(education.endDate)}`
    )
  doc.fontSize(body).text(education.description)

  doc.end()

  return new Response(doc.read(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": contentDisposition
    },
    status: 200,
    statusText: "OK"
  })
}
