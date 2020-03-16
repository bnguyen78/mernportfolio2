import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <About />
          </Route>

          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>

          <Route path="/portfolio">
            <Navbar />
            <Portfolio />
          </Route>

        </Switch>

      </Router>
    </>
  )
}

export default App