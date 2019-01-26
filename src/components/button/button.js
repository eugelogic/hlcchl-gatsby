import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({ children,btnLink,btnText,btnStyle }) => (
    <Link to={btnLink} className={btnStyle}>
      {btnText}
    </Link>
)

export default Button
