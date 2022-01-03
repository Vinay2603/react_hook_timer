import { useEffect, useRef, useState } from "react"

export const Wtimer =()=>{
   
   var [counter,setCounter]= useState()
   var [end ,setEnd] = useState()
const timerRef = useRef()
    
    const handlevalue =(e)=>{
     console.log(e.target.value)
     var q = Number(e.target.value)
       

      setCounter(q)
    }

    const handleEnd=(e)=>{
     
       console.log("end",e.target.value)
     var end = Number(e.target.value)
       
      
      setEnd(end)
    }
   

   useEffect(()=>{
       console.log("rerender")
       
       timerRef.current =   setInterval(()=>{
           setCounter((p)=>{
            
               if(p < 20 ){
                 return  p +1
               }else if(p === {end}){ 
                 clearInterval(timerRef.current )
                 }else{
                   clearInterval(timerRef.current )
                   return p
               }
               
           })
       },1000);
       return()=>{
        console.log("mounting")
        clearInterval(timerRef.current )
    }
   },[counter])

    return <div>
    
        <label > Start Time: </label>
        <input  type="number" name="start" placeholder="start time" onChange={handlevalue}/>
        
        <br/>
        <label > Last Time: </label>
        <input type="number" name="end" placeholder="end time" onChange={handleEnd} />
       
        <br/>
        
        
        <h1>Timer</h1>
        <h2>{counter === undefined ?0:counter} sec</h2>
    </div>
}