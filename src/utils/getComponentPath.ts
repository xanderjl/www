import path from 'path'
import { cwd } from 'process'

export const getComponentPath = (componentName: string) => {
  return path.join(cwd(), 'src/components/client/sketches/', componentName)
}
