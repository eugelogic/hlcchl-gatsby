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
        <p style={{ marginBottom: `5px` }}>Heath Lodge Community Centre - London</p>
        <p style={{ marginBottom: 0 }}>
            {new Date().getFullYear()} - Website crafted by <a style={{ color: `#8c8989` }} href="https://twitter.com/EugeneMolari" target="_black">
                WebJigsaw
            </a> with
            {` `}
            <a style={{ color: `#8c8989` }} href="https://www.gatsbyjs.org" target="_black">
                Gatsby
            </a> and kindly hosted on <a style={{ color: `#8c8989` }} href="https://www.netlify.com/" target="_black">
                Netlify
            </a>
        </p>
      </footer>
    </div>
  </div>
)

export default Footer
