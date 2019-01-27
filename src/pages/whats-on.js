import React from 'react'

import LayoutPage from '../components/layout-page/layout-page'
import Events from '../components/events/events'
import SEO from '../components/seo'

const WhatsOnPage = () => (
  <LayoutPage pageTitle="Whats On">
    <SEO title="Whats On" />
    <Events />
  </LayoutPage>
)

export default WhatsOnPage
