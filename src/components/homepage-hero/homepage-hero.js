import React from 'react'
import './homepage-hero.scss'
import Button from '../button/button'

const HomepageHero = () => (
  <div className="homepage-hero">

    <div className="homepage-hero__box-one">

      <h2>Lorem ipsum dolor sit amet.</h2>

    </div>

    <div className="homepage-hero__box-two">

      <h1>Vitae suscipit tellus mauris a diam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.</h1>

    </div>

    <div className="homepage-hero__btn-group">
      <Button link="/about-us/" color="white-btn btn-white">About Us</Button>
      <Button link="/whats-on/" color="green-btn btn-green">Whats On</Button>
      <Button link="/support-us/" color="white-btn btn-white">Support Us</Button>
    </div>
  </div>
)

export default HomepageHero
