import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  $isBordered?: boolean
  $isIconOnly?: boolean
  $isColorless?: boolean
}
