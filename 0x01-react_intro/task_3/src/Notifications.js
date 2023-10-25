import React from 'react'
import './Notifications.css'
import close from './close-icon.png'
import { getLatestNotification } from './utils'

const Notifications = () => {
    return (
        <div class='Notifications'>
            <button aria-label='Close' onClick={console.log('Close button has been clicked')} style={{background:'none', border: 'none', position: 'absolute', top: '1rem', right: '1rem'}}>
                <img src={close} alt='' style={{width: '1rem'}} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} ></li>
            </ul>
        </div>
    )
}

export default Notifications