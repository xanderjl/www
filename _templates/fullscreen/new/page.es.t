---
to: src/app/(p5)/sketches/<%= name %>/page.tsx
---
import Sketch from '@/components/client/sketches/<%= name %>'

export const metadata = {
  title: '<%= h.changeCase.title(name) %>'
}

const <%= h.changeCase.pascal(name) %>Page = () => <Sketch />

export default <%= h.changeCase.pascal(name) %>Page