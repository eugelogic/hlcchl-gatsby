import React from 'react'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const ContactUsPage = () => (
  <LayoutPage pageTitle="Contact Us">
    <SEO title="Contact Us" />

    <div className="two-col-wrapper">

        <div className="left-col">
            <p>Whether you need to get in touch or want to become a volunteer, feel free to fill in the form on this page and send it our way, or simply email us at: <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a></p>
            <p>We’ll try to get back to you as soon as possible.</p>
            <p>Alternatively, you can call us on <a href="tel:02083429524">020 8342 9524.</a></p>
            <p><a href="https://www.google.co.uk/maps/place/Holly+Lodge+Community+Centre/@51.5646612,-0.1482356,15z/data=!4m5!3m4!1s0x0:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">Find us on Google map!</a></p>

            <p><b>Our address is:</b><br/ >
            Holly Lodge Community Centre<br/ >
            30 Makepeace Avenue<br/ >
            Highgate, London<br/ >
            N6 6HL</p>

            <p>We Look forward to hearing from you.</p>
        </div>

        <div className="right-col">
            <form action="/thank-you" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <p>
                    <label>Your Name*</label><br />
                    <input type="text" name="name" required="required" />
                </p>
                <p>
                    <label>Your Email*</label><br />
                    <input type="email" name="email" required="required" />
                </p>
                <p>
                    <label>Subject</label><br />
                    <input type="text" name="subject" />
                </p>
                <p>
                    <label>How did you hear about us?</label><br />
                    <input type="text" name="conversion" />
                </p>
                <p>
                    <label>Your Message*</label><br />
                    <textarea name="message" rows="5" maxlength="750" required="required" ></textarea>
                    <small>* = required field</small>
                </p>
                <p>
                    <button className="green" type="submit">Send</button>
                </p>
            </form>
        </div>

    </div>

  </LayoutPage>
)

export default ContactUsPage
