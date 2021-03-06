import { useEffect, useState } from "react"

export const Timer =()=>{
    const [data, setData] =useState({
        start:"",
        end:""
    })
   var [counter,setCounter]= useState()

    const handlevalue =(e)=>{
     console.log(e.target.value)
      const {name, value} = e.target
      setData({...data,[name]:value})
    }

    const handleboth=(e)=>{
        e.preventDefault()
        console.log('data:', data)
        counter = data
    }

   useEffect(()=>{
    const id=   setInterval(()=>{
           setCounter((p)=>{
               if(p !== 20 ){
                 return  p+1
               }else{
                   clearInterval(id)
                   return p
               }
           })
       },1000);
       return()=>{
        console.log("mounting ")
        clearInterval(id)
    }
   },[])


    return <div>
    <form onSubmit={handleboth}>
        <label > Start Time: </label>
        <input  type="number" name="start" placeholder="start time" onChange={handlevalue}/>
        <br/>
        <label > Last Time: </label>
        <input type="number" name="end" placeholder="end time" onChange={handlevalue}/>
        <br/>
        <input type="submit" />
    </form>

       
        
        
        <h1>Timer</h1>
        <h2>{data.start === undefined ? 0:data.start} sec</h2>
    </div>
}