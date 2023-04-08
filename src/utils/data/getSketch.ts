import path from 'path'
import { cwd } from 'process'

export const getSketch = (name: string) => {
  const sketch = path.resolve(cwd(), `src/components/client/sketches/${name}`)

  return sketch
}
