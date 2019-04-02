import React from 'react'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const LocalContactsPage = () => (
  <LayoutPage pageTitle="Local Contacts">
    <SEO title="Local Contacts" />

    <h2>Holly Lodge Estate Manager</h2>
    <p>Barbara Wheatley is the Estate manager and can answer queries on parking, security and other estate matters.  She and the Estate team are to be found in the hut at the top of the estate in Holly Lodge Gardens.</p>
    <p>Email - <a href="mailto:manager@hle.org.uk">manager@hle.org.uk</a></p>

    <hr />
    <h2>Holly Lodge Residents Association</h2>
    <p>The HLRA represents all the residents of the Holly Lodge Estate mansion blocks, whether council tenants, leaseholders or private tenants. They  organise social events and other activities, as well as putting residents’ concerns to Camden Council and working with the Council to create solutions.</p>
    <p>They are officially recognised as a TRA (Tenants and Residents Association) by Camden Council and the Holly Lodge Community Centre is a part of this Association.</p>
    <p>Website: <a href="https://myhlra.org/" target="_blank" rel="noopener noreferrer">myhlra.org</a></p>
    <p>Email: <a href="mailto:hollylodgera@gmail.com">hollylodgera@gmail.com</a></p>

  </LayoutPage>
)

export default LocalContactsPage
