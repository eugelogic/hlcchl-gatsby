import React from 'react'
import { graphql } from 'gatsby'
import '../../components/style.css'

import Header from '../../components/header'
import Menu from '../../components/menu/menu'
import Footer from '../../components/footer'
import CookieConsent from "react-cookie-consent";
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
        <CookieConsent
          cookieName="HLCCHL-CookieConsent"
          style={{ background: "#439de6" }}
        >
          This is a fictitious website for demonstration purposes only.
        </CookieConsent>
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
