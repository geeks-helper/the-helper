import React, { useEffect, useState } from "react"

import { ALL_WORDS_DATA } from "./ALL_WORDS_DATA"
import * as S from "./style"

function categorizeWords(
  inputText: string,
  wordArray: string[]
): Record<number, string[]> {
  const userInput = inputText.toLowerCase()
  const categorizedWords: Record<number, string[]> = {}

  wordArray.forEach(word => {
    const lowercaseWord = word.toLowerCase()

    // Check if the word contains the user's input as a substring
    if (lowercaseWord.includes(userInput)) {
      const wordLength = lowercaseWord.length

      if (!categorizedWords[wordLength]) {
        categorizedWords[wordLength] = []
      }

      categorizedWords[wordLength].push(lowercaseWord)
    }
  })

  return categorizedWords
}

const ScrabbleWordFinder = () => {
  const [wordsData, setWordData] = useState({})
  const [inputText, setInputText] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setWordData(categorizeWords(inputText, ALL_WORDS_DATA))
  }
  const handleInputChange = e => {
    const searchText = e.target.value.toLowerCase()
    setInputText(searchText)
  }
  const word_arr = Object.entries(wordsData)
  return (
    <S.ScrabbleFinderContainer>
      <h1>Scrabble Word Finder</h1>
      <S.InputContainer onSubmit={handleSubmit}>
        <label htmlFor="scrabbleInput">Enter a word or part of a word:</label>
        <S.ScrabbleInput
          id="scrabbleInput"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your letters..."
        />
        <button type="submit">submit</button>
      </S.InputContainer>
      <S.ResultContainer>
        <h2>Matching Words:</h2>
        {word_arr?.length &&
          word_arr.map(item => {
            return (
              <S.ItemWrapper key={item[0]}>
                <S.LettersCount>
                  {item[0]} Letter words({item[1].length})
                </S.LettersCount>
                <S.WordsWrapper>
                  {item[1].map(word => (
                    <S.ResultItem key={word}>{word}</S.ResultItem>
                  ))}
                </S.WordsWrapper>
              </S.ItemWrapper>
            )
          })}
      </S.ResultContainer>
    </S.ScrabbleFinderContainer>
  )
}

export default ScrabbleWordFinder
