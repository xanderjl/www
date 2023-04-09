import fs from 'fs/promises'

export const getWritingSlugs = async () => {
  const files = await fs.readdir('./src/app/(writing)/writing')
  const posts = files
    .filter(file => file !== 'page.tsx' && file !== 'layout.tsx')
    .map(file => file.replace('.tsx', ''))

  return posts
}
