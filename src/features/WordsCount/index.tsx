import React, { type ChangeEvent, useState } from "react"

import MarkdownTable from "../../components/MarkdownTable"

import * as S from "./style"

interface WordsContProps {
  value: string
}

const fontSizeOptions = [
  { value: "14px", label: "Small" },
  { value: "16px", label: "Medium" },
  { value: "18px", label: "Large" },
  { value: "20px", label: "XL" },
  { value: "24px", label: "XXL" },
]

const WordsCont: React.FC<WordsContProps> = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [wordCount, setWordCount] = useState<number>(0)
  const [charCount, setCharCount] = useState<number>(0)
  const [lineCount, setLineCount] = useState<number>(0)
  const [selectedFontSize, setSelectedFontSize] = useState<string>("16px")

  const handleFontSizeChange = e => {
    setSelectedFontSize(e.target.value)
    // You can perform any actions here based on the selected value
  }

  const countWords = (text: string): number => {
    const words = text.trim().split(/\s+/)
    return words.filter(word => word !== "").length
  }

  const countChars = (text: string): number => {
    return text.length
  }

  const countLines = (text: string): number => {
    return text.split("\n").length
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = e.target.value
    setInputValue(text)
    const newWordCount = countWords(text)
    const newCharCount = countChars(text)
    const newLineCount = countLines(text)

    // Update counts
    setWordCount(newWordCount)
    setCharCount(newCharCount)
    setLineCount(newLineCount)
  }

  return (
    <>
      <S.StyledDropdownContainer>
        <S.StyledLabel htmlFor="fontSizeDropdown">
          Select Preferred Font Size:
        </S.StyledLabel>
        <S.CustomDropdown
          id="fontSizeDropdown"
          value={selectedFontSize}
          onChange={handleFontSizeChange}
        >
          {fontSizeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.CustomDropdown>
      </S.StyledDropdownContainer>
      <S.WordsContWrapper style={{ fontSize: selectedFontSize }}>
        <textarea
          rows={10}
          cols={50}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Start typing..."
        />
        <S.CountInfo>
          Words: {wordCount} | Characters: {charCount} | Lines: {lineCount}
        </S.CountInfo>
      </S.WordsContWrapper>
      <MarkdownTable text={inputValue} />
    </>
  )
}

export default WordsCont
