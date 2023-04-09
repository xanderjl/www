import fs from 'fs/promises'

export const getWritingSlugs = async () => {
  const files = await fs.readdir('./src/app/(mainSite)/writing')
  const posts = files
    .filter(file => file !== 'page.tsx')
    .filter(file => file !== 'layout.tsx')
    .map(file => file.replace('.tsx', ''))

  return posts
}
