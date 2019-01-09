import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The Holly Lodge Community Centre offers a whole range of activities in a friendly,
relaxed environment. We also offer space to hire for events.</h1>
    <h2>LATEST ANNOUNCEMENTS:</h2>
    <p>The HLCCHL will change its status to a Tenants and Residents Hall soon, associated with the HLRA.</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
