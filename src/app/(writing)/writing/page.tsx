import { Page } from '@/components/client/routes/writing/page'
import { getWritingSlugs } from '@/utils/data/getWritingSlugs'

const WritingPage = async () => {
  const list = await getWritingSlugs()

  return <Page list={list} />
}

export default WritingPage
