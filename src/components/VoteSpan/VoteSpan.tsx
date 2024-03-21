import { FC } from 'react'
import { VoteSpanWrapper } from './VoteSpan.styled'
import { VoteSpanProps } from './VoteSpan.types'

const VoteSpan: FC<VoteSpanProps> = ({ children }) => {
  return <VoteSpanWrapper>{children}</VoteSpanWrapper>
}

export default VoteSpan
