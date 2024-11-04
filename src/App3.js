import { useContext } from "react"
import { Appcontex } from "./App"

export default function App3(){
    const App3context=useContext(Appcontex)
    return(
        <div className="App">
            <h1> count from App3 :{App3context.state.b}</h1>
            <br/>
                <button onClick={()=>App3context.dispatchstate("zid5")}> increment</button>
                <p>{App3context.state.b % 2===0 ? "even":"odd"}</p>
                <button onClick={()=>App3context.dispatchstate("n9as5")}>decrimant</button>
        </div>
    )
}