import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from '../landing'
import Story from '../story'
import Contact from '../contact'
import Tech from '../tech'
import Design from '../design'
import Content from '../content'
import Twitter from '../../assets/twitter.jpg'
import Instagram from '../../assets/instagram.jpg'
import Twitch from '../../assets/twitch.ico'
import Home from '../../assets/home.jpg'

import './app.css'

class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <div className='main-page'>
            <div className='logo'><h1>@Zdiehlio</h1></div>
            <a className='icon' href='https://www.twitch.tv/zdiehlio'>
              <img src={Twitch} />
            </a>
            <a className='icon' href='https://twitter.com/zdiehlio'>
              <img src={Twitter} />
            </a>
            <a className='icon' href='https://www.instagram.com/zdiehlio/'>
              <img src={Instagram} />
            </a>
            <div className='description'><h6>Designer of awesome experiences and generally decent human being</h6></div>
            <div className='nav-bar'>
              <Link to='/'><img className='icon' src={Home} /> </Link>
            </div>
            <div className='main-content'>
              <Route exact path='/' component={Landing} />
              <Route exact path='/story' component={Story} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/tech' component={Tech} />
              <Route exact path='/design' component={Design} />
              <Route exact path='/content' component={Content} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
