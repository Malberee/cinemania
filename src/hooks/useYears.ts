const useYears = (from: number, to: number) => {
  const years = Array.from(new Array(to - from), (_, index) => from + index)

  return years.reverse()
}

export default useYears
