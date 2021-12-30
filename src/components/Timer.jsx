import { useState } from "react"

export const Timer =()=>{
    const [counter,setCounter]= useState(0)
    return <div>
        <br/>
        <label > Start Time: </label>
        <input type="number"/>
        <br/>
        <br/>
        <label > Last Time: </label>
        <input type="number"/>
        <br/>
        <br/>
        <h1>Timer</h1>
        <h2>13 sec</h2>
    </div>
}