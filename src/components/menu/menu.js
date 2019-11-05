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
                        <Link to="/" activeClassName="active">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/whats-on" activeClassName="active">What's On</Link>
                    </li>
                    <li>
                        <Link to="/film-club" activeClassName="active">Film Club</Link>
                    </li>
                    <li>
                        <Link to="/hall-hire" activeClassName="active">Hall Hire</Link>
                    </li>
                    <li>
                        <Link to="/terms-of-hire" activeClassName="active">Hall Hire T&C</Link>
                    </li>
                    <li>
                        <Link to="/news" activeClassName="active">News</Link>
                    </li>
                    <li>
                        <Link to="/nursery" activeClassName="active">Nursery</Link>
                    </li>
                    <li>
                        <Link to="/gallery" activeClassName="active">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/about-us" activeClassName="active">About Us</Link>
                    </li>
                    <li>
                        <Link to="/constitution" activeClassName="active">Constitution</Link>
                    </li>
                    <li>
                        <Link to="/support-us" activeClassName="active">Support Us</Link>
                    </li>
                    <li>
                        <a href="https://uk.virginmoneygiving.com/donation-web/charity?charityId=1017542&stop_mobi=yes" target="_blank" rel="noopener noreferrer">Donate Online</a>
                    </li>
                    <li>
                        <Link to="/contact-us" activeClassName="active">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cookies" activeClassName="active">Cookies</Link>
                    </li>
                </nav>
            </div>
        );
    }
}
