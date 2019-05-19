import React from 'react'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const FilmClubPage = () => (
  <LayoutPage pageTitle="Film Club">
    <SEO title="Film Club" />
    <p>Here's a comprehensive list of all the films shown at the Community Centre.</p>
    <p>Don't forget it's free of charge, all welcome.</p>
    <p>Email <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail</a> for more information.</p>
    <p><strong>17th of May @ 14:00</strong></p>
    <p>“Sabrina” with Audrey Hepburn and Humphrey Bogart.</p>
    <p><strong>31st of May @ 14:00</strong></p>
    <p>“Funny Face” to complete Audrey Hepburn season.</p>
    <p><strong>14th of June @ 14:00</strong></p>
    <p>“Gentleman’s Agreement” starting Gregory Peck.</p>
    <p><strong>... more dates coming soon.</strong></p>
  </LayoutPage>
)

export default FilmClubPage
