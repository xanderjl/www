---
to: src/app/(mainSite)/writing/<%= name %>/page.tsx
---

import Writing from './post.mdx'

export const metadata = {
  title: '<%= h.changeCase.title(name) %>'
}

const Page = () => <Writing />

export default Page