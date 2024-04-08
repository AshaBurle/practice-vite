import { useReducer } from "react"

const Registrtion =()=>{

    const [state,setState]=useReducer((state,newState)=>({...state,...newState}),{
        userDetails:{
            firstName:"asha",
            lastName:"burle",
            age:"23",
            email:"ashaburle06@gmail.com"

        }
        
    })

    const HandleChange=(e,name)=>{
        let userDetails = state.userDetails
        userDetails[name]= e.target.value 
        setState({
             userDetails

        })


    }

    return(
        <div>
            <div>
            <h1>Registration Form</h1>
            <input type="text" placeholder="enter name" id ="name" onChange={(e)=>HandleChange(e,"firstName")}/>
            <label id="name">firstName</label>
            <input type="text" placeholder="enter password" id ="password" onChange={(e)=>HandleChange(e,"lastName")} />
            <label id="password">lastName</label>
            <input type="text" placeholder="enter age" id ="age" onChange={(e)=>HandleChange(e,"age")} />
            <label id="age">age</label>
            <input type="text" placeholder="enter email" id ="email" onChange={(e)=>HandleChange(e,"email")} />
            <label id="email">Email</label>
            <button type="submit">Submit</button>
            </div>
            <div>
            <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">Visa - 3412</td>
      <td data-label="Due Date">04/01/2016</td>
      <td data-label="Amount">$1,190</td>
      <td data-label="Period">03/01/2016 - 03/31/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Visa - 6076</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$2,443</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Corporate AMEX</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$1,181</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Acount">Visa - 3412</td>
      <td data-label="Due Date">02/01/2016</td>
      <td data-label="Amount">$842</td>
      <td data-label="Period">01/01/2016 - 01/31/2016</td>
    </tr>
  </tbody>
</table>
            </div>
            
        </div>
        
        

    )
}

export default Registrtion