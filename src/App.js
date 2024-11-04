import './App.css';
import axios from 'axios';
import { useState,useEffect, useReducer, createContext} from 'react';
import App2 from './App2';
import App3 from './App3';
import Chrono from './Chrono';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Posts from './Posts';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';


function counte(state,action){
  if (action==="zid")return {...state,t:state.t+1}
  else if(action==="n9as")return {...state,t:state.t-1}
  if (action==="zid5")return {...state,b:state.b+5}
  else if(action==="n9as5")return {...state,b:state.b-5}
  else return state
}
export const Appcontex=createContext()
function App() {
  const [pers,setpers]=useState([])
  const [titl,settitl]=useState()
 
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((Response)=>{setpers(Response.data)})
    .catch(()=>{console.log("error")});})

  const[count,despatch]=useReducer(counte,{t:0,b:5})
  


  return (
            
     <BrowserRouter>
       <Nav/>
      <Routes>
      <Route path='/posts' element={ <Appcontex.Provider value={{state:count,dispatchstate:despatch}}>
                    <App2/>
                    <App3/>
                  </Appcontex.Provider>}/>
                  <Route path='ma9al' element={<Appcontex.Provider value={{state: pers}}>
                    <Posts/>
                  </Appcontex.Provider>}/>
    </Routes>
     <div className="App">
   
            <Chrono/>
            <select onChange={(e)=>{settitl(e.target.value)}}>
              {pers.map((per)=>{return <option>{per.id}</option>})}
            </select>
                 <p> TITLE : {pers.map((per)=>{if(per.id==titl )return<span>{per.title}</span>;else <p>"not exist"</p>})}</p>

                 
                  <div className='post'>
                    <h1>To Do Liste</h1>
                    <input></input><br/>
                    <button>Add</button>
                    {pers.map((pos)=>{return(<div><p>{pos.title}</p><button id='delet'>delete</button><button className='unchek'>ckecked</button><br /></div>)})}
                  </div>
              
    </div>
   
  </BrowserRouter>

   
  );
}

export default App;
