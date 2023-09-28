import React, { type ChangeEvent, useEffect, useState } from "react"

import * as S from "./style"

interface WordsContProps {
  value: string
}

const WordsCont: React.FC<WordsContProps> = ({ value }) => {
  const [wordCount, setWordCount] = useState<number>(0)
  const [charCount, setCharCount] = useState<number>(0)
  const [lineCount, setLineCount] = useState<number>(0)

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
    const newWordCount = countWords(text)
    const newCharCount = countChars(text)
    const newLineCount = countLines(text)

    // Update counts
    setWordCount(newWordCount)
    setCharCount(newCharCount)
    setLineCount(newLineCount)
  }

  return (
    <S.WordsContWrapper>
      <textarea
        rows={10}
        cols={50}
        value={value}
        onChange={handleInputChange}
        placeholder="Start typing..."
      />
      <S.CountInfo>
        Words: {wordCount} | Characters: {charCount} | Lines: {lineCount}
      </S.CountInfo>
    </S.WordsContWrapper>
  )
}

export default WordsCont
