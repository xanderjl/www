import type { PathLike } from 'fs'
import fs from 'fs/promises'

export const getDirSlugs = async (path: PathLike) => {
  const paths = await fs.readdir(path, { withFileTypes: true })
  const dirs = paths.filter(path => path.isDirectory())
  const slugs = dirs.map(dir => dir.name)

  return slugs
}
