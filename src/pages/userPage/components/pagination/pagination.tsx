import { useGlobalContext } from '@/helpers/contextGlobal'
import { pagination } from './index'
import { PaginationWrapper, PagLink } from './style'

const Dots = () => <span>...</span>

export const Page = ({ page }: any) => {
  const { activePage, getReposData } = useGlobalContext()

  const isDot: boolean = page === '...'
  const Component = isDot ? Dots : 'div'

  const isActive = activePage === page

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    getReposData(page)
  }

  return (
    <PagLink
      active={isActive}
      onClick={handleClick}
      isDot={isDot}
      disabled={isDot}
    >
      <Component>{page}</Component>
    </PagLink>
  )
}

export const Pagination = () => {
  const { activePage, totalArredondado } = useGlobalContext()
  const pages = pagination({ totalArredondado, activePage })
  return (
    <PaginationWrapper>
      {pages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </PaginationWrapper>
  )
}
