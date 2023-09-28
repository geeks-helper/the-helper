import styled from "styled-components"

import Markdown from "~/src/styles/markdown"

export const Container = styled(Markdown).attrs({
  as: "main",
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
`
