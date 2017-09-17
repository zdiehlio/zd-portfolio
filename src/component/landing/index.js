import React from 'react'
import { Link } from 'react-router-dom'

import './landing.scss'

class Landing extends React.Component {
  render(){
    return(
      <div className='landing'>
        <div><Link to='/tech'> Tech </Link></div>
        <div><Link to='/design'> Design </Link></div>
        <div><Link to='/content'> Content </Link></div>
      </div>
    )
  }
}

export default Landing
