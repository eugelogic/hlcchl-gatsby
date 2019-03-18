import React from 'react'
import './homepage-hero.scss'
import Button from '../button/button'

const HomepageHero = () => (
  <div className="homepage-hero">

    <div className="homepage-hero__box-one">

      <h2>By the community, for the community.</h2>

    </div>

    <div className="homepage-hero__box-two">

      <h1>The Holly Lodge Community Centre offers a whole range of activities in a friendly, relaxed environment. We also offer space to hire for events.</h1>

    </div>

    <div className="homepage-hero__btn-group">
      <Button link="/whats-on/" color="green-btn btn-green">Whats On</Button>
      <Button link="/support-us/" color="white-btn btn-white">Support Us</Button>
    </div>
  </div>
)

export default HomepageHero
