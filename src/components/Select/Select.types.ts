export interface Option {
    value: string | number
    label: string
}

export interface SelectProps {
    options: Option[]
    placeholder: string
    isSingleValue?: boolean
    isClearable?: boolean 
    onValueChange?: (value: (string | number)[]) => void
}