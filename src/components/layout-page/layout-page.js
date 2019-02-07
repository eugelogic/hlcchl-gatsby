import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Menu from '../menu/menu'
import PageTitle from '../page-title/page-title'
import Footer from '../footer'
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
      </>
    )}
  />
)

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPage
