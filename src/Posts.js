import React  from 'react'
import { useContext } from "react";
import { Appcontex } from "./App";
import './App.css';

const Posts = () => {
     
    const App3context=useContext(Appcontex)
    const posts =App3context.state.map((per)=>{return ( <div className='post' key={per.id}>
        <h1> {per.title} </h1>
        <hr></hr>
        <p>{per.body}</p>
      </div>)})
  return (
    <div className="App">
        {posts}
    </div>
  )
}

export default Posts