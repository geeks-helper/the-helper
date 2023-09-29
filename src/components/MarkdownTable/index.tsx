import React, { useEffect, useState } from "react"

import styled from "styled-components"

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  margin-top: 24px;
`

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
`

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`
function analyzeString(
  inputString: string
): { word: string; count: number; percentage: string }[] {
  // Step 1: Split the input string into an array of words
  const words: string[] = inputString.split(/\s+/)

  // Step 2: Count the occurrences of each word using an object
  const wordCounts: Record<string, number> = {}
  words.forEach(word => {
    if (wordCounts[word]) {
      wordCounts[word]++
    } else {
      wordCounts[word] = 1
    }
  })

  // Step 3: Calculate the total word count
  const totalWordCount: number = words.length

  // Step 4: Calculate the percentage for each word
  const wordData: { word: string; count: number; percentage: string }[] = []
  for (const word in wordCounts) {
    const count: number = wordCounts[word]
    const percentage: string = ((count / totalWordCount) * 100).toFixed(2) + "%"
    console.log({ percentage })
    wordData.push({ word, count, percentage })
  }

  return wordData
}

const MarkdownTable = ({ text = "" }) => {
  const [data, setData] = useState([])
  console.log({ text })
  useEffect(() => {
    const arr: string[] | any = analyzeString(text)
    setData(arr)
  }, [text])
  return (
    <Table>
      <thead>
        <tr>
          <Th>Word</Th>
          <Th>Count</Th>
          <Th>%</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <Td>{item.word}</Td>
            <Td>{item.count}</Td>
            <Td>{item.percentage}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MarkdownTable
