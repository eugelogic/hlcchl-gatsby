import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Link to="/menu">Menu</Link>
    <h1>Gallery</h1>
    <p>Lorem ipsum cesar salad and dolores mortis.</p>
  </Layout>
)

export default GalleryPage
