import styled from "styled-components"

export const ScrabbleFinderContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`

export const InputContainer = styled.form`
  margin-bottom: 20px;
`

export const ScrabbleInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const ResultContainer = styled.div`
  margin-top: 20px;
`

export const ResultItem = styled.div`
  margin-bottom: 4px;
  font-size: 18px;
  background: rgb(70 89 104);
  color: white;
  padding: 8px 8px;
  border-radius: 4px;
`

export const ItemWrapper = styled.div`
  width: 100%;
  border-top: 1px solid var(--color-gray-3);
  border-bottom: 1px solid var(--color-gray-3);
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

export const LettersCount = styled.div`
  background: #6ec1e4;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  padding: 10px;
  max-width: 200px;
  letter-spacing: 2px;
  line-height: 2;
  border-radius: 8px;
`

export const WordsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  flex: 1;
`
