import React from 'react'
import { Link } from 'gatsby'
import './homepage-hero.scss'

const HomepageHero = () => (
  <div className="homepage-hero">

    <div className="homepage-hero__box-one">

      <h2>By the community, for the community.</h2>

    </div>

    <div className="homepage-hero__box-two">

      <h1>The Holly Lodge Community Centre offers a whole range of activities in a friendly, relaxed environment. We also offer space to hire for events.</h1>

    </div>

    <div className="homepage-hero__btn-group">
      <Link
        to="/whats-on/"
        style={{
          color: 'white',
          backgroundColor: '#189960',
          textDecoration: 'none',
          textTransform: 'uppercase',
          borderRadius: '5px',
          padding: '15px',
          marginRight: '1em',
        }}
      >
        Whats On
      </Link>
      <Link
        to="/support-us/"
        style={{
          color: '#189960',
          backgroundColor: 'white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          borderRadius: '5px',
          padding: '15px',
        }}
      >
        Support Us
      </Link>
    </div>
  </div>
)

export default HomepageHero
