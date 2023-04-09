import { Page } from '@/components/client/routes/sketches/page'
import { getDirSlugs } from '@/utils/data/getDirSlugs'

const SketchesPage = async () => {
  const list = await getDirSlugs('./src/app/(p5)/sketches')

  return <Page list={list} />
}

export default SketchesPage
