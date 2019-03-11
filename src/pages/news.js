import React from 'react'
import { Link, graphql } from "gatsby"

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <LayoutPage pageTitle="News">
        <SEO title="News" />
        <div>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                <Link to={node.fields.slug}>
                    <h3>
                        {node.frontmatter.title}{" "} &#9670; {node.frontmatter.date}
                    </h3>
                </Link>
                    <p>{node.excerpt}</p>
                </div>
            ))}
      </div>
    </LayoutPage>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
