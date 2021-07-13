import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Category from './pages/Category'
import Categories from './pages/Categories'
import Decks from './pages/Decks'
import Deck from './pages/Deck'

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/login'>
            <Signin />
          </Route> */}
          <Route path='/categories'>
            <Categories />
          </Route>
          <Route path='/category/:id'>
            <Category />
          </Route>
          <Route path='/decks'>
            <Decks />
          </Route>
          <Route path='/deck/:id'>
            <Deck />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>  )
}

export default App
