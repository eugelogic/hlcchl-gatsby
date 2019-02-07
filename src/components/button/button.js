import React from 'react'
import { Link } from 'gatsby'
import '../style.css'
import './button.scss'

const Button = ({ children, link, color }) => (
    <Link to={link} className={color}>
      {children}
    </Link>
)

export default Button
