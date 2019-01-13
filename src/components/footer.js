import React from 'react'

const Footer = () => (
  <div
    style={{
        color: `#8c8989`,
        background: `#282a2b`,
        textAlign: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <footer style={{
          margin: 0,
          fontSize: `14px`
       }}>
        <p style={{ marginBottom: `5px` }}>Holly Lodge Community Centre is a registered charity 293003 2013-2017</p>
        <p style={{ marginBottom: 0 }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a style={{ color: `#8c8989` }} href="https://www.gatsbyjs.org" target="_black">
                Gatsby
            </a>
        </p>
      </footer>
    </div>
  </div>
)

export default Footer
