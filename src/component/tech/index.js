import React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '../../assets/checkbox.png'

import './tech.css'

class Tech extends React.Component {
  render(){
    return(
      <div className='tech'>
        <div><a href='http://www.mythicfit.pro'><img src='https://i.imgur.com/3iT3MRx.jpg' /></a></div>
        <div><a href='https://todo-78f82.firebaseapp.com/'><img src={Checkbox}/></a></div>
      </div>
    )
  }
}

export default Tech
