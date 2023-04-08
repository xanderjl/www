import fs from 'fs/promises'

export const getSketchSlugs = async () => {
  const files = await fs.readdir('./src/app/sketches')
  const sketches = files
    .filter(file => file !== 'page.tsx')
    .filter(file => file !== 'layout.tsx')
    .map(file => file.replace('.tsx', ''))

  return sketches
}
