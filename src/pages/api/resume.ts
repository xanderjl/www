import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import PDFDocument from 'pdfkit'

import { formatDate } from '@/utils/formatDate'

const collection = await getCollection('work-history')
const experience = collection.sort(
  (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime()
)

export const GET: APIRoute = () => {
  const contentDisposition = `inline; filename="xander-low-resume-${new Date().getFullYear()}.pdf"`
  const pdf = new PDFDocument({ size: 'A4', margin: 50 })

  experience.map(
    ({ data: { client, endDate, responsibilities, role, startDate } }) => {
      pdf.text(`${role} at ${client}`)
      pdf.text(`${formatDate(startDate)} - ${formatDate(endDate)}`)

      pdf.list(responsibilities)

      pdf.moveDown()
    }
  )
  pdf.end()

  return new Response(pdf.read(), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': contentDisposition
    },
    status: 200,
    statusText: 'OK'
  })
}
