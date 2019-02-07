import React from 'react'
import { Link } from 'gatsby'
import '../style.css'
import './homepage-content.scss'

const HomepageContent = () => (
  <div className="homepage-content">

    <h3>LATEST ANNOUNCEMENTS:</h3>

    <p>The HLCCHL will change its status to a Tenants and Residents Hall soon, associated with the HLRA.</p>

    <a href="https://myhlra.org/" target="_blank" rel="noopener noreferrer">Click here to visit the Holly Lodge Residents Association’s website.</a>

    <hr />

    <p>Lots going on at the centre this term! <Link to="/whats-on">Check our events calendar for details.</Link></p>

    <p>Also, Suzuki violin lessons – for further information please <a href="http://www.bluebirdsuzuki.com/" target="_blank" rel="noopener noreferrer">see Miks’ website: bluebirdsuzuki.com.</a></p>

  </div>
)

export default HomepageContent
