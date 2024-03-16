import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  isBordered?: boolean
  size?: 'sm' | 'md' | 'lg'
}
