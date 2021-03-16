import React, { Component } from 'react'

export class SocialProfileItem extends Component {
    render() {
        const {link, logo, text} = this.props.profile

        return (
            <li>
                <a href={link}>
                    <div className="socialprofile__container">
                        <div className="icon">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="details">
                            {text}
                        </div>
                    </div>
                </a>
            </li>
        )
    }
}

export default SocialProfileItem
