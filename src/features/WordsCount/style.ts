import styled from "styled-components"

export const MarkdownStyles = `
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;

  h1 {
    font-size: 2em;
    margin: 1.2em 0;
  }

  h2 {
    font-size: 1.5em;
    margin: 1em 0;
  }

  h3 {
    font-size: 1.2em;
    margin: 1em 0;
  }

  p {
    margin: 1em 0;
  }

  ul, ol {
    margin: 1em 0;
    padding-left: 1.5em;
  }

  li {
    margin: 0.5em 0;
  }

  a {
    color: #007acc;
    text-decoration: underline;

    &:hover {
      color: #005fbf;
    }
  }
`

export const WordsContWrapper = styled.div`
  ${MarkdownStyles}
  textarea {
    border: 1px solid var(--color-blue);
    width: 100%;
    border-radius: 8px;
    padding: 8px;
  }
`

export const CountInfo = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: #777;
  display: inline-block;
`
