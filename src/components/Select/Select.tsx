import React, { FC, useEffect, useState } from 'react'
import {
  SelectWrapper,
  SelectTrigger,
  ChevronWrapper,
  OptionList,
  OptionItem,
} from './Select.styled'
import { SelectProps } from './Select.types'
import Chevron from 'icons/Chevron'
import { useOutsideClick } from 'hooks/useOutsideClick'

const Select: FC<SelectProps> = ({
  placeholder,
  options,
  isSingleValue,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
    []
  )

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      toggleOpen()
    }
  }

  const ref = useOutsideClick(() => setIsOpen(false))

  const handleSelect = (value: string | number) => {
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
      <SelectTrigger
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
      >
        {selectedOptions.length ? formattedSelectedOptions : placeholder}
        <ChevronWrapper $isOpen={isOpen}>
          <Chevron />
        </ChevronWrapper>
      </SelectTrigger>
      <OptionList $isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem
            $isSelected={selectedOptions.includes(option.value)}
            key={option.value}
          >
            <a onClick={() => handleSelect(option.value)}>{option.label}</a>
          </OptionItem>
        ))}
      </OptionList>
    </SelectWrapper>
  )
}

export default Select
