import styled from 'styled-components'

export const VoteSpanWrapper = styled.span`
  padding: 1px 4px;
  background-color: ${({ theme }) => theme.colors.voteSpanBackground};
  color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 5px;
`
