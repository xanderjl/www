import { Page } from '@/components/client/routes/sketches/page'
import { getSketchSlugs } from '@/utils/data/getSketchSlugs'

const SketchesPage = async () => {
  const list = await getSketchSlugs()

  return <Page list={list} />
}

export default SketchesPage
