import React, { useState } from "react"
export function Register(){
  const initialvalues={UserName:"Kali",Password:"12345678",Age:"33",Email:"Kali@gmail.com"};  
    const[Formvalues,SetFormValues]=useState({initialvalues});
    
        const UserNamehandleChange=(e)=>{
            debugger
            SetFormValues({
                UserName:e.target.value,
                Password:Formvalues.Password,
                Age:Formvalues.Age,
                Email:Formvalues.Email
            })
            // const { name, value } = e.target;
            // SetFormValues({ ...Formvalues, [name]: value }); 
        }
        const PasswrodhandleChange=(e)=>{
            debugger
            SetFormValues({
                UserName:Formvalues.UserName,
                Password:e.target.value,
                Age:Formvalues.Age,
                Email:Formvalues.Email
            }) 
        }

        const AgehandleChange=(e)=>{
            debugger
            SetFormValues({
                UserName:Formvalues.UserName,
                Password:Formvalues.Password,
                Age:e.target.value,
                Email:Formvalues.Email
            }) 
        }

        const  emailhandleChange=(e)=>{
            debugger
            SetFormValues({
                UserName:Formvalues.UserName,
                Password:Formvalues.Password,
                Age:Formvalues.Age,
                Email:e.target.value
            }) 
        }

        const UpdateDataset=()=>{
            debugger 
        }
    return(
         <div>
         <pre>{JSON.stringify(Formvalues, undefined, 2)}</pre>
         <main className="d-flex justify-content-center mt-4">
            <form className="border border-2 border-dark rounded p-4">
                <h2 className="bi bi-person-fill">Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"
                     className="form-control" name="UserName" value={Formvalues.UserName} 
                     onChange={UserNamehandleChange}
                     /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password"
                    onChange={PasswrodhandleChange}
                     className="form-control" value={Formvalues.Password} 
                     
                     ></input></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" 
                    onChange={AgehandleChange}
                    className="form-control" value={Formvalues.Age} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email"
                    onChange={emailhandleChange}
                    name="Email" className="form-control" value={Formvalues.Email} /></dd>
                </dl>
                <button onClick={UpdateDataset} className="btn btn-primary w-100">Register</button>
            </form>
         </main>
         </div>
    )
}