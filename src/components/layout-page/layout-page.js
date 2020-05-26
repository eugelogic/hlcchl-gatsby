import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Menu from '../menu/menu'
import PageTitle from '../page-title/page-title'
import Footer from '../footer'
import CookieConsent from "react-cookie-consent";
import '../style.css'
import './layout-page.scss'

const LayoutPage = ({ children,pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <PageTitle>{pageTitle}</PageTitle>
        <div className="content">
          {children}
        </div>
        <Footer />
        <CookieConsent
          cookieName="HLCCHL-CookieConsent"
          style={{ background: "#439de6" }}
        >
          This is a fictitious website for demonstration purposes only.
        </CookieConsent>
      </>
    )}
  />
)

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPage
