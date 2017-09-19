import React from 'react'
import { Link } from 'react-router-dom'
import Techy from '../../assets/techy.jpg'
import Creative from '../../assets/creative.jpg'
import Story from '../../assets/story.jpg'

import './landing.css'

class Landing extends React.Component {
  render(){
    return(
      <div className='landing'>
        <Link to='/tech'><img src={Techy} /> Tech </Link>
        <Link to='/design'><img src={Creative} />Creative </Link>
        <Link to='/content'><img src={Story} /> My Story </Link>
      </div>
    )
  }
}

export default Landing
