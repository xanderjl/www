import { Search } from '@/components/client/Search'
import { getSketchSlugs } from '@/utils/data/getSketchSlugs'

const Page = async () => {
  const list = await getSketchSlugs()

  return <Search list={list} />
}

export default Page
