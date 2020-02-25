import React from 'react'
import { Link } from 'gatsby'
import './homepage-content.scss'

const HomepageContent = () => (
  <div className="homepage-content">

    <h3>LATEST ANNOUNCEMENTS:</h3>

    <p>Earthen Living presents a workshop on Living Ayurveda,<br /> an ancient Indian system of healthcare and it's relevance to you today. <br />Join us on Saturday the 7th of March from 11am till noon. <br />For more details get in touch at <a href="mailto:contact@earthenliving.uk">contact@earthenliving.uk</a>. <br />Venue: The Holly Lodge Community Centre - <a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target='_blank' rel='noopener noreferrer'>[see on the map]</a><br /><a href="/living-ayurveda-workshop.pdf">Download the brochure.</a></p>

    <hr />

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
