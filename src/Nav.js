import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Nav = () => {
  return (
    <div className="App">
        <Link to={"/ma9al"}> Posts</Link>
        <Link to={"/posts"}>App</Link>

    </div>
  )
}

export default Nav