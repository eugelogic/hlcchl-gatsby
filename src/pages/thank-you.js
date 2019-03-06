import React from 'react'
import { Link } from 'gatsby'

import LayoutPage from '../components/layout-page/layout-page'

const ThankYouPage = ({ data }) => (
    <LayoutPage pageTitle="Thank You">

    <div className="center">
        <p>Thanks for submitting your query.</p>
        <p>We'll try to get back to you as soon as possible.</p>
        <p><b>Go back to the <Link to="/">Homepage</Link></b></p>
    </div>

  </LayoutPage>
)

export default ThankYouPage
