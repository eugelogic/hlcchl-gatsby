import React from 'react'
import './homepage-cards.scss'
import Button from '../button/button'

const HomepageCards = () => (
  <div className="homepage-cards">

    <div className="cards-wrapper">

        <div className="card">

            <figure>
                <img src={require("../../images/HLCCHL-Hall-Hire-1.jpg")} alt="Holly-Lodge-Community-Centre-Hall-Hire" />
            </figure>

            <div className="card__title">
                <h3>Hall Hire</h3>
            </div>

            <div className="card__copy">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Vulputate odio ut enim blandit volutpat maecenas. Integer quis auctor elit sed vulputate mi sit amet. Vestibulum mattis ullamcorper velit.</p>
            </div>

            <div className="card__btn">
                <Button link="/hall-hire/" color="green-btn">Hall Hire</Button>
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
            <p>Vulputate odio ut enim blandit volutpat maecenas. Integer quis auctor elit sed vulputate mi sit amet. Vestibulum mattis ullamcorper velit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="card__btn">
                <Button link="/contact-us/" color="green-btn">Join Us</Button>
            </div>

        </div>{/* end of card */}
        <div className="card">

            <figure>
                <img src={require("../../images/Holly-Lodge-Community-Centre-Hall-Hire.jpg")} alt="Holly-Lodge-Community-Centre-Activities" />
            </figure>

            <div className="card__title">
                <h3>Activities</h3>
            </div>

            <div className="card__copy">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Vulputate odio ut enim blandit volutpat maecenas. Integer quis auctor elit sed vulputate mi sit amet. Vestibulum mattis ullamcorper velit.</p>
            </div>

            <div className="card__btn">
                <Button link="/whats-on/" color="green-btn">Whats On</Button>
            </div>

        </div>{/* end of card */}

    </div>{/* end of card-wrapper */}

  </div>
)

export default HomepageCards
