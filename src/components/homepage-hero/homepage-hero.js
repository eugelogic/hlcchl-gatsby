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
      <Button btnLink="/whats-on/" btnStyle="green" btnText="Whats On"/>
      <Button btnLink="/support-us/" btnStyle="white" btnText="Support Us"/>
    </div>
  </div>
)

export default HomepageHero
