import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import Header from './header'
import Menu from '../components/menu/menu'
import HomepageHero from '../components/homepage-hero/homepage-hero'
import HomepageLatest from '../components/homepage-latest/homepage-latest'
import HomepageCards from '../components/homepage-cards/homepage-cards'
import Footer from './footer'
import CookieConsent from "react-cookie-consent";
import './style.css'

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Home" keywords={[`charity`, `highgate`, `hall hire`]} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <HomepageHero />
        <HomepageLatest />
        <HomepageCards />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
