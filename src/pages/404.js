import React from 'react'
import { Link } from 'gatsby'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <LayoutPage pageTitle="Page not found (404)">
    <SEO title="Page not found (404)" />
    <p className="center">Sorry, the page you are looking for doesn't exist.</p>
    <p className="center">Please navigate back to the <Link to="/">homepage</Link> to find your way.</p>
  </LayoutPage>
)

export default NotFoundPage
