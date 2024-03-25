import { FC, MouseEvent, useEffect, useState } from 'react'
import {
  SelectWrapper,
  SelectTrigger,
  IconsWrapper,
  CloseWrapper,
  ChevronWrapper,
  OptionList,
  OptionItem,
} from './Select.styled'
import { SelectProps } from './Select.types'
import Chevron from 'icons/Chevron'
import useOutsideClick from 'hooks/useOutsideClick'
import Close from 'icons/Close'

const Select: FC<SelectProps> = ({
  placeholder,
  options,
  isSingleValue,
  isClearable,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
    []
  )

  const toggleOpen = (e: MouseEvent) => {
    e.stopPropagation()

    setIsOpen(!isOpen)
  }

  const clearSelected = (e: MouseEvent) => {
    e.stopPropagation()

    setSelectedOptions([])
  }

  const ref = useOutsideClick(() => setIsOpen(false))

  const handleSelect = (value: string | number) => {
    if (isSingleValue && selectedOptions.includes(value)) {
      setSelectedOptions([])
      return
    }
    if (isSingleValue) {
      setSelectedOptions([value])
      return
    }
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value])
      return
    }
    setSelectedOptions(selectedOptions.filter((option) => option !== value))
  }

  const formattedSelectedOptions = selectedOptions
    .map((value) => options.find((option) => option.value === value)?.label)
    .join(', ')

  useEffect(() => {
    if (onValueChange) {
      onValueChange(selectedOptions)
    }
  }, [selectedOptions, onValueChange])

  return (
    <SelectWrapper ref={ref}>
      <SelectTrigger onClick={toggleOpen}>
        {selectedOptions.length ? formattedSelectedOptions : placeholder}
        <IconsWrapper>
          {isClearable && selectedOptions.length > 0 && (
            <CloseWrapper onClick={clearSelected}>
              <Close />
            </CloseWrapper>
          )}
          <ChevronWrapper $isOpen={isOpen}>
            <Chevron />
          </ChevronWrapper>
        </IconsWrapper>
      </SelectTrigger>
      <OptionList $isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem
            $isSelected={selectedOptions.includes(option.value)}
            key={option.value}
            onClick={() => handleSelect(option.value)}
          >
            <a tabIndex={0} href="#">
              {option.label}
            </a>
          </OptionItem>
        ))}
      </OptionList>
    </SelectWrapper>
  )
}

export default Select
