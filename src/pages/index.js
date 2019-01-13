import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`charity`, `highgate`, `hall hire`]} />
    <h3>LATEST ANNOUNCEMENTS:</h3>
    <p>The HLCCHL will change its status to a Tenants and Residents Hall soon, associated with the HLRA.</p>
  </Layout>
)

export default IndexPage
