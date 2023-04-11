import { DM_Mono, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin-ext'], display: 'swap' })
const dmMono = DM_Mono({
  subsets: ['latin-ext'],
  weight: '400',
  display: 'swap'
})

export const fonts: Record<string, string> = {
  heading: `${inter.style.fontFamily}, sans-serif`,
  body: `${dmMono.style.fontFamily}, monospace`
}
