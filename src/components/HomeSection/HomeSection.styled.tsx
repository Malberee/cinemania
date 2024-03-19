import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HomeSectionWrapper = styled.div``

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`
export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.text.mobile.md};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
`
