import React, { Component } from 'react'
import './css/Navbar.css'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>
                    <div className='title'>
                        <h2>IP TracKer</h2>
                    </div>
                    <div className='li'>
                        <ul className='list'>
                            <li className='item_nav'><a href="https://github.com/Not-your-Code/IP-TRACKER">About</a></li>
                            <li className='item_nav'><a href="https://ipgeolocation.io/">Api</a></li>
                            </ul>
                    </div>
                </nav>


            </div>
        )
    }
}

export default Navbar