import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({ type, color, link, children, ...other }) => {

  if (type === 'submit') {

    return <button type="submit" className={color}>{children}</button>

  } else if (type === 'a') {

    return <a href={link} className={color} {...other}>{children}</a>;

  }

  return <Link to={link} className={color} {...other}>{children}</Link>;

}

export default Button
