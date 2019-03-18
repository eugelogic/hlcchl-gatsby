import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({ children, link, color, type }) => {
  if (type === 'submit') {
      return (
          <button type="submit" className={color}>
            {children}
          </button>
      )
  }

  return (
      <Link to={link} className={color}>
        {children}
      </Link>
  );
}

export default Button
