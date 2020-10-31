import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Covid-19 Tracker</h1>
                <a href="/">India</a>
                <a href="/world">World</a>
            </div>
        )
    }
}
