import fs from 'fs/promises'

export const getSketchSlugs = async () => {
  const files = await fs.readdir('./src/app/(p5)/sketches')
  const sketches = files
    .filter(file => file !== 'page.tsx' && file !== 'layout.tsx')
    .map(file => file.replace('.tsx', ''))

  return sketches
}
