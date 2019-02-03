import React from 'react'
import { graphql } from 'gatsby'

import Header from '../../components/header'
import Menu from '../../components/menu/menu'
import Footer from '../../components/footer'

import './news-post.scss'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
            <div className="post-title-bar">
                <div className="post-title-bar__container">
                    <h1>{post.frontmatter.title}</h1>
                </div>
            </div>
            <div className="content__container">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
