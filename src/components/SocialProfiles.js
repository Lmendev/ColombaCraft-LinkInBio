import React, { Component } from 'react'
import SocialProfileItem from './SocialProfileItem'
import db from '../server/db'

import './styles/Socialprofile.css'

export class SocialProfiles extends Component {
    render() {
        return (
            <main>
                <nav>
                    <ul>
                        {db.socialprofiles.map((profile) => 
                            <SocialProfileItem 
                                key={profile.id} 
                                profile={profile} 
                            />)}
                    </ul>
                </nav>
           </main>
        )
    }
}

export default SocialProfiles
