import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

const Header = ({ siteTitle }) => (
<>
  <div
    style={{
      textAlign: `center`,
      background: `white`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `10px 0`,
      }}
    >
      <p style={{ margin: 0 }}>
        Call Us on <a href="tel:02083429524">0208 342 9524</a> or Send Us an Email at <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a>
      </p>
    </div>
 </div>
 <div
    style={{
        textAlign: `center`,
        background: `#189960`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
</>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
