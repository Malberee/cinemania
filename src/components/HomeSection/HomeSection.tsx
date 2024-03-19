import { FC } from 'react'
import {
  HomeSectionWrapper,
  SectionHeader,
  SectionTitle,
  Link,
} from './HomeSection.styled'
import { HomeSectionProps } from './HomeSection.types'

const HomeSection: FC<HomeSectionProps> = ({ children, title, link }) => {
  return (
    <HomeSectionWrapper>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {link && <Link to={link}>See all</Link>}
      </SectionHeader>
      {children}
    </HomeSectionWrapper>
  )
}

export default HomeSection
