import React from 'react'
import Twitter from '../../assets/twitter.jpg'
import Instagram from '../../assets/instagram.jpg'
import Twitch from '../../assets/twitch.ico'

import './contact.scss'

class Contact extends React.Component {
  render(){
    return(
      <div>
        <p>I hate forms, I don't want to read them and you certainly don't want to fill them out.  Instead, if you have questions or just want to chat join me on <br></br>
          <a className='icon' href='https://www.twitch.tv/zdiehlio'>
            <img src={Twitch} />
          </a>
          <a className='icon' href='https://twitter.com/zdiehlio'>
            <img src={Twitter} />
          </a>
          <a className='icon' href='https://www.instagram.com/zdiehlio/'>
            <img src={Instagram} />
          </a>
        </p>
      </div>
    )
  }
}

export default Contact
