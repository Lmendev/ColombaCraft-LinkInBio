import React, { Component } from 'react'

import db from '../server/db'

import './styles/footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer>
                {db.footer.text}
            </footer>
        )
    }
}

export default Footer
