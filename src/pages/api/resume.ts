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
  data: { name, socials, education, email, phone }
} = await getEntry('resume-data', 'index')
const contentDisposition = `inline; filename="xander-low-resume-${new Date().getFullYear()}.pdf"`

// Instantiate a new PDFDocument
const doc = new PDF({
  size: 'A4',
  margin: 36
})

export const GET: APIRoute = async () => {
  doc.registerFont('DM Mono', DMMono)

  // Heading
  doc.fontSize(24).text(name)

  // Socials
  doc
    .link(doc.x, doc.y, 24, 24, socials['github'].url)
    .addSVG(
      '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      doc.x,
      doc.y
    )

  doc
    .link(doc.x + 24, doc.y, 24, 24, socials['linkedin'].url)
    .addSVG(
      '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      doc.x + 24,
      doc.y
    )

  doc.moveDown()

  // Contact info
  doc.fontSize(12).text(phone, { link: `tel:${phone}`, underline: true })
  doc.fontSize(12).text(email, {
    link: `mailto:${email}`,
    underline: true
  })

  doc.moveDown()

  doc.fontSize(18).text('Experience')

  experience.map(
    ({ data: { client, endDate, responsibilities, role, startDate } }) => {
      // Heading
      doc.fontSize(18).text(`${client} — ${role}`)

      // Start and end date
      doc.fontSize(12).text(`${formatDate(startDate)} - ${formatDate(endDate)}`)

      doc.moveDown()

      // Responsibilities
      doc.fontSize(12).list(responsibilities, { bulletIndent: 20 })

      doc.moveDown(2)
    }
  )

  // Education
  doc.fontSize(18).text('Education')
  doc.fontSize(12).text(education.school)
  doc.fontSize(12).text(education.program)
  doc
    .fontSize(12)
    .text(
      `${formatDate(education.startDate)} - ${formatDate(education.endDate)}`
    )
  doc.fontSize(12).text(education.description)

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
