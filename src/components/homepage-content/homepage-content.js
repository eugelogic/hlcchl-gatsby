import React from 'react'
import { Link } from 'gatsby'
import './homepage-content.scss'

const HomepageContent = () => (
  <div className="homepage-content">

    <h3>LATEST ANNOUNCEMENTS:</h3>

    <p>NEW - Drop in any time between 2pm and 4pm, Tuesdays and Wednesdays<br /> for tea, coffee, use of computers, board games and a chat with our Manager, Mike.</p>

    <hr />

    <p>The HLCCHL is a Tenants and Residents Hall, associated with the HLRA,<br />but still registered as Holly Lodge Community Centre.</p>

    <a href="https://myhlra.org/" target="_blank" rel="noopener noreferrer">Visit the Holly Lodge Residents Association’s website.</a>

    <hr />

    <p>Lots going on at the centre this term! <Link to="/whats-on">Check our events calendar for details.</Link></p>

    <p>Also, Suzuki violin lessons – after school Mondays, Tuesdays and Thursdays.<br />For further information please <a href="http://www.bluebirdsuzuki.com/" target="_blank" rel="noopener noreferrer">see Miks’ website: bluebirdsuzuki.com.</a></p>

    <hr />

    <p>Support our charity organization by starting your shopping at</p>
    <h2><a href="https://smile.amazon.co.uk/ch/293003-0" target="_blank" rel="noopener noreferrer">smile.amazon.com</a></h2>
    <p>Amazon donates 0.5% of the price of your eligible AmazonSmile purchases to us.</p>
    <p>AmazonSmile is the same Amazon you know.</p>
    <p>Same products, same prices, same service.</p>

  </div>
)

export default HomepageContent
