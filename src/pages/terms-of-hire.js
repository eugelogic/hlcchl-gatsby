import React from 'react'
import { Link } from 'gatsby'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const TermsOfHirePage = () => (
  <LayoutPage>
    <SEO title="Terms of Hire" />
    <h1>Terms of Hire</h1>
    <p>The Community Centre in Makepeace Avenue holds a maximum of 80 people.</p>
    <p>The hall can be divided into sections for events involving fewer people or if a larger event wants to break into smaller groups.
The main hall space is approx 9.0m x 9.0m.</p>
    <p>It is available for social events at weekends up to 9.30 p.m. and occasionally for weekday meetings.</p>
    <p>It is possible to hire it for events, e.g.: meetings, lectures, classes, workshops and seminars <strong>but unfortunately we are not hiring out the hall for parties</strong>.</p>
    <h2>Hire charges:</h2>
    <ul>
        <li>Standard charge £25 per hour</li>
        <li>Concessions may be available, <Link to="/contact-us">get in touch to find out.</Link></li>
    </ul>
    <p>Negotiable discounted rates for full day/weekends and regular users.</p>
    <p>A deposit of up to £50 (please write a cheque) is required. This will be returned by post/ unless there is cleaning or damage to the premises.</p>
    <h2>Restrictions</h2>
    <p>Music restrictions: Only low amplified music is permitted and not after 9pm. This is due to the Centre being situated under shelter accommodation.</p>
    <h2>Parking</h2>
    <p>Parking on the Holly Lodge estate is for residents or permit holders. You may park while loading or unloading supplies or equipment, or while working or visiting the centre, but must clearly display a large note in the windscreen stating that you are visiting the centre, with a contact mobile number. There are free parking spaces in Swain’s Lane and the surrounding area.</p>
    <h2>Use of the kitchen</h2>
    <p>You may bring in food for heating up. The cooker is turned on with a wall switch situated to the right of the cooker. IMPORTANT: please switch OFF After use.</p>
    <p>If you wish to cook using HLCC kitchens, you must use a professional caterer with appropriate insurance and supply evidence of this. HLCC reserves the right to refuse permission to use the kitchens or to charge an additional deposit.</p>
    <p>You may use our kettles and cutlery but it must be washed up after use. Leave all washed utensils on the draining board (DO NOT USE THE DISHWASHER) (staff will sterilise it on their return).</p>
    <p>Clear away all rubbish, sweep floor (dustpan and broom by the hall entrance). Put any rubbish in black bin liners provided and take out to the large black bins on the right of the main entrance (please see diagram).</p>
    <p>Please stack all chairs and tidy up. PLEASE LEAVE THE HALL AS YOU FOUND IT.</p>
    <p>Restricted use of patio, no smoking, using mobiles or loud talking or un-supervised children. Please do not move the flower pots unless you have permission.</p>
    <p>Please note fire exits and extinguishers and comply with all health and safety requirements.</p>
  </LayoutPage>
)

export default TermsOfHirePage
