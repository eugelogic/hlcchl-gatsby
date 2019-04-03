import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import Header from './header'
import Menu from '../components/menu/menu'
import HomepageHero from '../components/homepage-hero/homepage-hero'
import HomepageContent from '../components/homepage-content/homepage-content'
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
        <HomepageContent />
        <HomepageCards />
        <Footer />
        <CookieConsent
          cookieName="HLCCHL-CookieConsent"
          style={{ background: "#439de6" }}
        >
          This website uses <a href="/cookies/">cookies</a> to enhance the user experience.
        </CookieConsent>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
