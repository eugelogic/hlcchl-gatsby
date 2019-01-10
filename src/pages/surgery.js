import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SurgeryPage = () => (
  <Layout>
    <SEO title="Surgery" />
    <Link to="/menu">Menu</Link>
    <h1>Surgery</h1>
    <p>Lorem ipsum cesar salad and dolores mortis.</p>
  </Layout>
)

export default SurgeryPage
