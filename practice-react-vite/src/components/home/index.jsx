import { useEffect, useState } from "react"
import Login from "../login"
import Registrtion from "../registration"

const Home =()=>{
    const [Tab,setTab] = useState(1)
    
    useEffect(()=>{
    setTab(2)
    
},[])


    return(
        <div>
        
        <div >
       
        <h1>Home Page</h1>
        <button type="button" className={Tab=== 1? "bg_color" : "" }onClick={()=>setTab(1)}>Go to Login</button>
        <button type="button"  className={Tab=== 2? "bg_color" : "" } onClick={()=>setTab(2)} >Go to Registraion Form</button>
        <button type="button"  className={Tab=== 0? "bg_color" : "" } onClick={()=>setTab(0)}>Go to home</button>
         </div>

         <div>
            {Tab ===1 &&  <Login/>}
            
         </div>
         <div>{ Tab === 2 && <Registrtion/>}</div>
         {Tab===0&&<div >
            <h1>Home</h1>
            
 
         </div>}
        </div>
        
    )
}

export default Home