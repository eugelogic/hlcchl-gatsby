import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <Link to="/menu">Menu</Link>
    <h1>News</h1>
    <p>Lorem ipsum cesar salad and dolores mortis.</p>
  </Layout>
)

export default NewsPage
