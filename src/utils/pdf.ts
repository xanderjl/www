import PDFDocument from 'pdfkit'
import SVGtoPDF from 'svg-to-pdfkit'

export class PDF extends PDFDocument {
  addSVG = (
    svg: string | SVGElement,
    x: number,
    y: number,
    options?: SVGtoPDF.SVGtoPDFOptions
  ) => SVGtoPDF(this, svg, x, y, options)
}
