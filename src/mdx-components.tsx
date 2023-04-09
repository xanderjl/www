import type { MDXComponents } from 'mdx/types'

import { CodeBlock } from '@/components/client/CodeBlock'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Li,
  Ol,
  P,
  Ul
} from '@/components/client/MDXComponents'

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    // @ts-expect-error - MDXComponents is not typed correctly
    code: CodeBlock,
    ...components
  }
}
