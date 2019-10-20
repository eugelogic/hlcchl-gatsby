import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutPage from '../components/layout-page/layout-page'
import Button from '../components/button/button'
import SEO from '../components/seo'

const SupportUsPage = ({ data }) => (
  <LayoutPage pageTitle="Support Us">
    <SEO title="Support Us" />
    <h2>Financial Donations</h2>
    <p>Due to budget cuts, all government funding has been eliminated for the Holly Lodge Community Centre. However, thanks to the generosity and support of many, we are happily still able to provide activities and services for the community!</p>
    <p>All donations are most welcome. Thank You!</p>

    <h3>Online Donation</h3>
    <p>To make an online donation, click on the button below; you will be redirected to <a href="https://uk.virginmoneygiving.com/donation-web/charity?charityId=1017542&stop_mobi=yes" target="_blank" rel="noopener noreferrer">the Holly Lodge Community Centre donation page on the secure Virgin Money Giving website</a> that supports fundraising for charities.</p>
    <p>Please make sure you select "Yes" when you are prompted for Gift Aid. That will give us some additional funds at not extra cost to you.</p>
    <p><a href="https://uk.virginmoneygiving.com/giving/fundraising/gift-aid-awareness/" target="_blank" rel="noopener noreferrer">Read "Gift Aid: what’s stopping you ticking that box"</a> for more information.</p>
    <div className="page-btn">
        <Button type="a" link="https://uk.virginmoneygiving.com/donation-web/charity?charityId=1017542&stop_mobi=yes" className="green-btn" target="_blank" rel="noopener noreferrer">Donate Online</Button>
    </div>

    <h3>Amazon Smile</h3>
    <p>Support our charity organization by starting your shopping at <a href="https://smile.amazon.co.uk/ch/293003-0" target="_blank" rel="noopener noreferrer">smile.amazon.com.</a> Amazon donates 0.5% of the price of your eligible AmazonSmile purchases to us. AmazonSmile is the same Amazon you know. Same products, same prices, same service.</p>
    <p>Click the button below to start shopping and donating.</p>
    <figure>
        <a href="https://smile.amazon.co.uk/ch/293003-0" target="_blank" rel="noopener noreferrer">
            <Img style={{
                width: `300px`,
                borderWidth: `1px`,
                borderStyle: `solid`,
                borderColor: `orange`
             }} fluid={data.imageOne.childImageSharp.fluid} alt="Amazon-Smile" />
         </a>
    </figure>

    <h3>Donate via post</h3>
    <p>If you prefer to make your donation via post, please download, fill in and post the direct debit form which you can access by clicking the button below.</p>
    <div className="page-btn">
        <Button type="a" link="/Holly-Lodge-Community-Centre-donation-form.docx" color="white-btn">Download Form</Button>
    </div>

    <figure>
        <Img fluid={data.imageTwo.childImageSharp.fluid} alt="Holly-Lodge-Community-Centre-party-time" />
    </figure>

    <hr />
    <h2>Join Us</h2>
    <ul>
        <li>Enjoy volunteering, or want to give it a go?</li>
        <li>Do you have a specific skill set you would like to share with others?</li>
        <li>Perhaps you just want to help out, or have time to share with the community?</li>
    </ul>
    <p>We always need motivated volunteers!</p>
    <p>Please fill in the form on our Contact Us page and we’ll get back to you as soon as possible. We look forward to hearing from you.</p>
    <div className="page-btn">
        <Button link="/contact-us/" color="green-btn">Fill in the Form</Button>
    </div>

  </LayoutPage>
)

export default SupportUsPage

export const query = graphql`
query {
    imageOne: file(relativePath: {eq: "amazon-smile-logo.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
    imageTwo: file(relativePath: {eq: "Holly-Lodge-Community-Centre-party-time.jpg"}) {
        childImageSharp {
            fluid (maxWidth: 740) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
}`
