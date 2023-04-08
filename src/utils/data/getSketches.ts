import { readdir } from 'fs/promises'

export const getSketches = async () => {
  const files = await readdir('./src/sketches')
  return files
}
