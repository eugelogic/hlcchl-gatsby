import React from 'react'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const NurseryPage = () => (
  <LayoutPage pageTitle="Nursery">
    <SEO title="Nursery" />

    <p>The Holly Lodge  Nursery (formerly the Family Centre) is now open!</p>
    <p>A nursery built by and for the community.</p>
    <p>Spaces are currently still available, with an affordable price plan based on household income.</p>
    <p>Contact:<br />
        Holly Lodge Nursery<br />
        Oakeshott Avenue, N6 6ED<br />
        Telephone: <a href="tel:02083479500">0208 347 9500</a><br />
        Email: <a href="mailto:liz@qcca.org.uk">liz@qcca.org.uk</a></p>

    <figure>
        <img src={require("../images/Holly-Lodge-Community-Centre-Nursery.jpg")} alt="Holly-Lodge-Community-Centre-Nursery" />
    </figure>

  </LayoutPage>
)

export default NurseryPage
