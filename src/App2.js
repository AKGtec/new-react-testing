import { useContext } from "react";
import { Appcontex } from "./App";

function App2(){
    const App2contex=useContext(Appcontex)
    return(
        <div className="App">
            <h1>count fromApp2 : {App2contex.state.t}</h1>
      <button onClick={()=>App2contex.dispatchstate("zid")}>zid</button>
      <button onClick={()=>App2contex.dispatchstate("n9as")}>n9as</button>
        </div>
    )
}

export default App2;