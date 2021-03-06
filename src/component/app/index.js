import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from '../landing'
import Story from '../story'
import Contact from '../contact'
import Tech from '../tech'
import Design from '../design'
import Content from '../content'

import './app.css'

class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <div className='main-page'>
            <div className='logo'><h1>@Zdiehlio</h1></div>
            <div className='description'>Designer of awesome experiences and generally decent human being</div>
            <div className='nav-bar'>
              <Link to='/'> Home </Link>
              <Link to='/story'> Story </Link>
              <Link to='/contact'> Connect </Link>
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
