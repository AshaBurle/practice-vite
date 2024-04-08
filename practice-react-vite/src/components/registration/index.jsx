import { useReducer } from "react"

const Registrtion =()=>{

    const [state,setState]=useReducer((state,newState)=>({...state,...newState}),{
        userDetails:{
            firstName:"asha",
            lastName:"burle",
            age:"23",
            email:"ashaburle06@gmail.com"

        },
        userList:[

        ],
        actionType:"add",
        currentIndex:0
        
    })

    const HandleChange=(e,name)=>{
        let userDetails = state.userDetails
        userDetails[name]= e.target.value 
        setState({
             userDetails

        })


    }

    const handleEdit=(Item,index)=>{
         let{userDetails} = state 
         userDetails= JSON.parse(JSON.stringify(Item))
         setState({userDetails,actionType:"edit",currentIndex:index})




    }
    console.log(state.userDetails)
    


const handleSubmit=()=>{
    let {userList,userDetails} = state
    if (state.actionType=== "edit"){
        userList[state.currentIndex]=userDetails

    }else{
        let tempObject= JSON.parse(JSON.stringify(userDetails))
        userList.push(tempObject)

    }
    
   
setState({userList})
}

    
  let TableJsx;
TableJsx =  state.userList.map((Item,index)=>{
    return <tr key={index}>
        <td >{index+1}</td>
    <td >{Item.firstName}</td>
    <td >{Item.lastName}</td>
    <td >{Item.age}</td>
    <td >{Item.email}</td>
    <td><button onClick={()=>handleEdit(Item,index)}>Edit</button></td>
  </tr>    

   
    

})







  return(
        <div>
            <div>
            <h1>Registration Form</h1>
            <input type="text" placeholder="enter name" id ="name" onChange={(e)=>HandleChange(e,"firstName")} value={state.userDetails.firstName}/>
            <label id="name">firstName</label>
            <input type="text" placeholder="enter password" id ="password" onChange={(e)=>HandleChange(e,"lastName")} value={state.userDetails.lastName} />
            <label id="password">lastName</label>
            <input type="text" placeholder="enter age" id ="age" onChange={(e)=>HandleChange(e,"age")} value={state.userDetails.age} />
            <label id="age">age</label>
            <input type="text" placeholder="enter email" id ="email" onChange={(e)=>HandleChange(e,"email")} value={state.userDetails.email} />
            <label id="email">Email</label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            <div>
            <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
    <th scope="col">S.No</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {TableJsx}
    
  </tbody>
</table>
            </div>
            
        </div>
        
        

    )
}

export default Registrtion