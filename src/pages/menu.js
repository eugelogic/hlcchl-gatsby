import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <h1>Menu</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Homepage</Link>
            </li>
            <li>
                <Link to="/whats-on">What's On</Link>
            </li>
            <li>
                <Link to="/hall-hire">Hall Hire</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/nursery">Nursery</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/local-contacts">Local Contacts</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
            <li>
                <Link to="/constitution">Constitution</Link>
            </li>
            <li>
                <Link to="/support-us">Support Us</Link>
            </li>
            <li>
                <Link to="/about-us">Contact Us</Link>
            </li>
            <li>
                <Link to="/cookies">Cookies</Link>
            </li>
        </ul>
    </nav>
  </Layout>
)

export default MenuPage
