import { FC } from 'react'
import { PaginateWrapper, ArrowButton } from './Paginate.styled'
import { PaginateProps } from './Paginate.types'
import Chevron from 'icons/Chevron'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'

const Paginate: FC<PaginateProps> = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangePage = (page: number) => {
    setSearchParams({ page: `${page + 1}` })
  }

  return (
    <PaginateWrapper>
      <ReactPaginate
        pageCount={totalPages > 1000 ? 1000 : totalPages}
        initialPage={Number(searchParams.get('page')) - 1 || 0}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel="..."
        containerClassName="container"
        pageClassName="page"
        activeClassName="active"
        nextClassName="arrowBtn"
        previousClassName="arrowBtn"
        breakClassName="break"
        onPageChange={(page) => handleChangePage(page.selected)}
        previousLabel={
          <ArrowButton direction="prev">
            <Chevron />
          </ArrowButton>
        }
        nextLabel={
          <ArrowButton direction="next">
            <Chevron />
          </ArrowButton>
        }
      />
    </PaginateWrapper>
  )
}

export default Paginate
