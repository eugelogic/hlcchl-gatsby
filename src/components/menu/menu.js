import React, { Component } from 'react'
import { Link } from 'gatsby'
import './menu.scss'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }
    render() {
        return (
            <div className="menu-container">
                <button onClick={this.toggleNav.bind(this)}>{this.state.menuIsOpen ? `X Close Menu` : `Menu`}</button>
                <nav style={{ display: this.state.menuIsOpen ? 'block' : 'none' }}>
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
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cookies">Cookies</Link>
                    </li>
                </nav>
            </div>
        );
    }
}
