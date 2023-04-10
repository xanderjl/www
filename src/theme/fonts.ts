import { Inter, Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin-ext'], display: 'swap' })
const inter = Inter({ subsets: ['latin-ext'], display: 'swap' })

export const fonts = {
  heading: `${montserrat.style.fontFamily}, sans-serif`,
  body: `${inter.style.fontFamily}, sans-serif`
}
