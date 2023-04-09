---
to: src/app/(writing)/writing/<%= name %>/post.mdx
---
export const metadata = {
  title: '<%= h.changeCase.title(name) %>'
}

# Hello World