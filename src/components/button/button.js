import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({ children, link, color }) => (
    <Link to={link} className={color}>
      {children}
    </Link>
)

export default Button
