import type { APIRoute } from 'astro'
import { getCollection, getEntry } from 'astro:content'
import PDFDocument from 'pdfkit'

import { formatDate } from '@/utils/formatDate'

import DMMono from '../../../public/fonts/DM-Mono.ttf'

const workHistory = await getCollection('work-history')
const experience = workHistory.sort(
  (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime()
)
const {
  data: { name, socials, education, email, phone }
} = await getEntry('resume-data', 'index')

export const GET: APIRoute = async () => {
  const contentDisposition = `inline; filename="xander-low-resume-${new Date().getFullYear()}.pdf"`
  const doc = new PDFDocument({
    size: 'A4',
    margin: 36
  })

  doc.registerFont('DM Mono', DMMono)

  // Heading
  doc.fontSize(24).text(name)

  doc.fontSize(12).text(phone, { link: `tel:${phone}`, underline: true })
  doc.fontSize(12).text(email, {
    link: `mailto:${email}`,
    underline: true
  })

  doc.moveDown()

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
