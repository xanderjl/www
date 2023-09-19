import type { APIRoute } from 'astro'
import PDFDocument from 'pdfkit'

export const GET: APIRoute = () => {
  const pdf = new PDFDocument({ size: 'A4', margin: 50 })

  pdf.text('Hello World!')
  pdf.end()

  return new Response(JSON.stringify(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="resume.pdf"'
    },
    status: 200,
    statusText: 'OK'
  })
}
