import { FC, useEffect, useMemo, useState } from 'react'
import { PaginateWrapper, ArrowButton } from './Paginate.styled'
import { PaginateProps } from './Paginate.types'
import Chevron from 'icons/Chevron'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'

const Paginate: FC<PaginateProps> = ({ totalPages }) => {
  console.log("totalPages: ", totalPages);
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1
  )
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  )

  const handleChangePage = (page: number) => {
    setCurrentPage(page + 1)
  }

  useEffect(() => {
    setSearchParams({ ...params, page: currentPage.toString() })
  }, [currentPage, params])

  return (
    <PaginateWrapper>
      <ReactPaginate
        pageCount={totalPages > 500 ? 500 : totalPages}
        initialPage={currentPage - 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel="..."
        containerClassName="container"
        pageLinkClassName="page"
        activeLinkClassName="active"
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
