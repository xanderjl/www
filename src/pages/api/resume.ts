import type { APIRoute } from 'astro'
import { getCollection, getEntry } from 'astro:content'

import { formatDate } from '@/utils/formatDate'
import { PDF } from '@/utils/pdf'

import DMMono from '../../../public/fonts/DM-Mono.ttf'

const workHistory = await getCollection('work-history')
const experience = workHistory.sort(
  (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime()
)
const {
  data: { name, socials, education, email, phone, icons }
} = await getEntry('resume-data', 'index')
const contentDisposition = `inline; filename="xander-low-resume-${new Date().getFullYear()}.pdf"`

// SVG and layout props
const margin = 36
const iconSize = 24

// Typography
const h1 = 24
const h2 = 18
const body = 12

// Instantiate a new PDFDocument
const doc = new PDF({
  size: 'A4',
  margin
})

export const GET: APIRoute = async () => {
  doc.registerFont('DM Mono', DMMono)

  // Heading
  doc.fontSize(h1).text(name)

  // Socials
  doc
    .link(doc.x, doc.y, iconSize, iconSize, socials['github'].url)
    .addSVG(icons['github'], doc.x, doc.y)

  doc
    .link(doc.x + iconSize, doc.y, iconSize, iconSize, socials['linkedin'].url)
    .addSVG(icons['linkedin'], doc.x + iconSize, doc.y)

  // Contact info

  // Phone
  doc.addSVG(
    icons['phone'],
    doc.page.width - margin * 5.5,
    doc.y - iconSize * 0.125
  )
  doc
    .fontSize(body)
    .text(phone, { link: `tel:${phone}`, underline: true, align: 'right' })

  // Email
  doc.addSVG(
    icons['email'],
    doc.page.width - margin * 5.5,
    doc.y - iconSize * 0.125
  )
  doc.fontSize(body).text(email, {
    link: `mailto:${email}`,
    underline: true,
    align: 'right'
  })

  doc.moveDown()

  doc.fontSize(h2).text('Experience')

  experience.map(
    ({ data: { client, endDate, responsibilities, role, startDate } }) => {
      // Heading
      doc.fontSize(h2).text(`${client} — ${role}`)

      // Start and end date
      doc
        .fontSize(body)
        .text(`${formatDate(startDate)} - ${formatDate(endDate)}`)

      doc.moveDown()

      // Responsibilities
      doc.fontSize(body).list(responsibilities, { bulletIndent: 20 })

      doc.moveDown(2)
    }
  )

  // Education
  doc.fontSize(h2).text('Education')
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
      'Content-Type': 'application/pdf',
      'Content-Disposition': contentDisposition
    },
    status: 200,
    statusText: 'OK'
  })
}
