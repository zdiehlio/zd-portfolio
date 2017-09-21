import React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '../../assets/checkbox.png'
import Money from '../../assets/green_dollar.png'
import Slider from 'react-slick'

import './tech.css'

class Tech extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      useCSS: true,
    }
    return(
      <Slider className='tech' {...settings}>
        <div><a href='http://www.mythicfit.pro'>Mythic Fit<img src='https://i.imgur.com/3iT3MRx.jpg' /></a></div>
        <div><a href='https://todo-78f82.firebaseapp.com/'>To Do List<img src={Checkbox}/></a></div>
        <div><a href='https://budget-t.firebaseapp.com/'>Budget Tracker<img src={Money}/></a></div>
      </Slider>
    )
  }
}

export default Tech
