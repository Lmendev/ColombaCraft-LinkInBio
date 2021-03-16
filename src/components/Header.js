import React, { Component } from 'react'

import './styles/header.css'

import db from '../server/db'

export class Header extends Component {
    render() {
        const {name, text1, text2, logo} = db.header

        return (
            <header>
                <div>
                    <img src={logo} alt=""/>
                </div>

                <div>
                    <h1>{name}</h1>
                </div>

                <div>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>

            </header>
        )
    }
}

export default Header
