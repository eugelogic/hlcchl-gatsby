import React from 'react'
import './homepage-cards.scss'
import Button from '../button/button'

const HomepageCards = () => (
  <div className="homepage-cards">

    <div className="cards-wrapper">

        <div className="card">

            <figure>
                <img src={require("../../images/Holly-Lodge-Community-Centre-activities.jpg")} alt="Holly-Lodge-Community-Centre-activities" />
            </figure>

            <div className="card__title">
                <h3>Activities</h3>
            </div>

            <div className="card__copy">
                <p>Come participate in one of our many activities. Among our current class offerings you’ll find Judo, yoga, and art. Attend WI and other local meetings, as well as a variety of other events. Have a look at our calendar to find out what’s on, and when.</p>
            </div>

            <div className="card__btn">
                <Button link="/whats-on/" color="green">Whats On</Button>
            </div>

        </div>{/* end of card */}
        <div className="card">

            <figure>
                <img src={require("../../images/Holly-Lodge-Community-Centre-Fair-2013.jpg")} alt="Holly-Lodge-Community-Centre-Fair-2013" />
            </figure>

            <div className="card__title">
                <h3>Volunteer</h3>
            </div>

            <div className="card__copy">
                <p>Enjoy volunteering, or want to give it a go? Have a skill set you want to share, or just want to help out? We always need motivated volunteers. Please fill in the form on our Contact Us page and we’ll get back to you as soon as possible.</p>
            </div>

            <div className="card__btn">
                <Button link="/contact-us/" color="green">Join Us</Button>
            </div>

        </div>{/* end of card */}
        <div className="card">

            <figure>
                <img src={require("../../images/Holly-Lodge-Community-Centre-Hall-Hire.jpg")} alt="Holly-Lodge-Community-Centre-Hall-Hire" />
            </figure>

            <div className="card__title">
                <h3>Hall Hire</h3>
            </div>

            <div className="card__copy">
                <p>We have an attractive, newly refurbished space for hire, with a commercial style kitchen and a lovely terrace. If you would like to hold lectures, classes, workshops, seminars or meetings do get in touch. <strong>Unfortunately we are not hiring out the hall for parties.</strong></p>
            </div>

            <div className="card__btn">
                <Button link="/hall-hire/" color="green">Hall Hire</Button>
            </div>

        </div>{/* end of card */}

    </div>{/* end of card-wrapper */}

  </div>
)

export default HomepageCards
