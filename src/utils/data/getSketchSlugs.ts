import fs from 'fs/promises'

export const getSketchSlugs = async () => {
  const files = await fs.readdir('./src/components/client/sketches')
  const sketches = files.map(file => file.replace('.tsx', ''))

  return sketches
}
