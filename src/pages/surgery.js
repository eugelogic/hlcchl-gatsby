import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NurseryPage = () => (
  <Layout>
    <SEO title="Nursery" />
    <Link to="/menu">Menu</Link>
    <h1>Nursery</h1>
    <p>Lorem ipsum cesar salad and dolores mortis.</p>
  </Layout>
)

export default NurseryPage
