import React, { Component } from 'react'

import './styles/header.css'

import db from '../server/db'

export class Header extends Component {
    render() {
        const {name, text1, text2, logo} = db.header

        return (
            <header>
                <div className="circle-shape">
                    <img src={logo} alt=""/>
                </div>

                <div>
                    <h1>{name}</h1>
                </div>

                <div>
                    <p>{text1}<span class="hand__animation">👋</span></p>
                    <p></p>
                </div>

            </header>
        )
    }
}

export default Header
