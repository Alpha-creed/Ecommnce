import React from 'react'
import {Route,Routes,BrowserRouter as Router, Link} from "react-router-dom"
import About from '../pages/About'
import Home from '../pages/Home'

export default function TabR() {
  return (
    <Router>
    <div>
      let move to home and about
    </div>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path='/' exact element={<Home/>}/>
    </Routes>
    </Router>
  )
}
