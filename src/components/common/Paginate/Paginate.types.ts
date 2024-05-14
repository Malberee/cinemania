export interface PaginateProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}
