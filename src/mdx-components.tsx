import { MDXComponents } from 'mdx/types'
import { H1, H2, H3, H4, H5, H6, P } from '@/components/client/MDXComponents'

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    ...components
  }
}
