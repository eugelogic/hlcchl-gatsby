import React from 'react'
import { Link } from 'gatsby'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const CookiesPage = () => (
  <LayoutPage pageTitle="Cookies">
    <SEO title="Cookies" />
    <p>Cookies enhance your experience, gather general visitor information and track visits.</p>

    <p>Our website address is: <b>https://www.hlcchl.org/</b></p>

    <p>We measure traffic on this website, <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer">learn about Google Analytics cookie usage.</a></p>

    <p><a href="http://www.aboutcookies.org.uk/" target="_blank" rel="noopener noreferrer">Find out more on how to control cookies at aboutcookies.org.uk</a></p>

    <hr />
    <h2>Embedded Content from Other Websites</h2>
    <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
    <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.</p>

    <hr />
    <p>Please send us an email at <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a> if you have any questions.</p>

    <p>Alternatively use the <Link to="/contact-us">Contact Us</Link> page.</p>

  </LayoutPage>
)

export default CookiesPage
