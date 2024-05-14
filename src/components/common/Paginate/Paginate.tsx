import { FC } from 'react'
import { PaginateWrapper, ArrowButton } from './Paginate.styled'
import { PaginateProps } from './Paginate.types'
import Chevron from 'icons/Chevron'
import ReactPaginate from 'react-paginate'

const Paginate: FC<PaginateProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <PaginateWrapper>
      <ReactPaginate
        pageCount={totalPages}
        initialPage={currentPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel="..."
        containerClassName="container"
        pageLinkClassName="page"
        activeLinkClassName="active"
        nextClassName="arrowBtn"
        previousClassName="arrowBtn"
        breakClassName="break"
        onPageChange={(page) => onPageChange(page.selected)}
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
