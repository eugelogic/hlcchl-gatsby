import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({ type, color, link, ...other }) => {

  if (type === 'submit') {

    return <button type="submit" className={color} {...other} />

  } else if (type === 'a') {

    return <a href={link} className={color} {...other} />;

  }

  return <Link to={link} className={color} {...other} />;

}

export default Button
