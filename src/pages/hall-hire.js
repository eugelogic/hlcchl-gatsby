import React from 'react'
import { Link } from 'gatsby'
import GalleryImg from '../components/gallery-img'
import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const HallHirePage = () => (
  <LayoutPage pageTitle="Hall Hire">
    <SEO title="Hall Hire" />
    <p>Are you looking for a hall to hire in North London?<br />
        Would you like to hold classes, lectures, workshops, seminars, meetings or other events?<br />
        <strong>Unfortunately we are not hiring out the hall for parties.</strong></p>
    <p>We have a space available on the beautiful Holly Lodge Estate in Highgate.<br />
    The Community Centre, is situated at 30, Makepeace Avenue N6 6HL.</p>
    <ul>
        <li>It has wheelchair access and a kitchen. Parking is available on Swains Lane, and buses C11, C2, 210 and 214 pass close by. The nearest tube is Archway (15 minute walk).</li>
        <li>Can be hired for occasional or regular events some weekdays, afternoons, evenings and weekends.</li>
        <li>Holds up to 80 people, depending on event.</li>
        <li>Main hall space approximately 9m x 9m , which can extend to 9m x 13m with folding doors open.</li>
    </ul>
    <p>Hire charges:</p>
    <ul>
        <li>Standard charge £25 per hour</li>
        <li>Concessions may be available, <Link to="/contact-us">get in touch to find out.</Link></li>
    </ul>
    <p>Note: No loud amplified music is permitted as the hall is below sheltered accommodation. Gentle music is allowed.</p>
    <p>Please <Link to="/terms-of-hire">see our Terms of Hire</Link> for more information.</p>

    <hr />

    <h2 className="center">Hall Hire Gallery</h2>

    <div className="two-col-gallery-grid">
        <GalleryImg src={`HLCCHL-Hall-Hire-1.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-2.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-3.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-4.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-5.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-6.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-7.jpg`} />
        <GalleryImg src={`HLCCHL-Hall-Hire-8.jpeg`} />
    </div>

  </LayoutPage>
)

export default HallHirePage
