import React from 'react'
import { Link } from 'gatsby'
import './homepage-content.scss'

const HomepageContent = () => (
  <div className="homepage-content">

    <h3>LATEST ANNOUNCEMENTS:</h3>

    <p>The HLCCHL is now a Tenants and Residents Hall, associated with the HLRA,<br />but still registered as Holly Lodge Community Centre.</p>

    <a href="https://myhlra.org/" target="_blank" rel="noopener noreferrer">Visit the Holly Lodge Residents Association’s website.</a>

    <hr />

    <p>Lots going on at the centre this term! <Link to="/whats-on">Check our events calendar for details.</Link></p>

    <p>Also, Suzuki violin lessons – for further information please <a href="http://www.bluebirdsuzuki.com/" target="_blank" rel="noopener noreferrer">see Miks’ website: bluebirdsuzuki.com.</a></p>

  </div>
)

export default HomepageContent
