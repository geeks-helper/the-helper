import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import SEO from "~/src/components/seo"
import Layout from "~/src/layouts/layout"
import { rhythm } from "~/src/styles/typography"

import * as S from "~/src/styles/about"

const About = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query About {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  const markdown = data.allMarkdownRemark.edges[0].node.html

  return (
    <Layout>
      <SEO title="About" />
      <S.Container
        dangerouslySetInnerHTML={{ __html: markdown ?? "" }}
        rhythm={rhythm}
      ></S.Container>
    </Layout>
  )
}

export default About
