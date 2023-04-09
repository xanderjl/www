import { Page } from '@/components/client/routes/writing/page'
import { getDirSlugs } from '@/utils/data/getDirSlugs'

const WritingPage = async () => {
  const list = await getDirSlugs('./src/app/(writing)/writing')

  return <Page list={list} />
}

export default WritingPage
