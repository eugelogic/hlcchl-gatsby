import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

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
        lineHeight: `2`,
        padding: `10px`,
      }}
    >
      <p style={{ margin: 0 }}>
        Call Us on <a href="tel:0208070605">0208 070 6050</a> or Send Us an Email at <a href="mailto:hello@email.com">hello@email.com</a>
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
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `26px`,
            lineHeight: `1.25`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
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
