import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Link to="/menu">Menu</Link>
    <h1>About Us</h1>
    <p>Lorem ipsum cesar salad and dolores mortis.</p>
  </Layout>
)

export default AboutUsPage
