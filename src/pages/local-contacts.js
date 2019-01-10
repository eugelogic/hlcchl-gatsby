import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LocalContactsPage = () => (
  <Layout>
    <SEO title="Local Contacts" />
    <Link to="/menu">Menu</Link>
    <h1>Local Contacts</h1>
    <p>Lorem ipsum cesar salad and dolores mortis.</p>
  </Layout>
)

export default LocalContactsPage
