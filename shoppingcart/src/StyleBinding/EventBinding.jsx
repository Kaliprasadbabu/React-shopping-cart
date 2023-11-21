import React, { useState } from "react"
export function EventBinding(){
const[FormatApply,setFormatApply]=useState({FontFamily:"",Fontcolor:"",Fontsize:""});

    const ApplyChnage=(e)=>{
        const { name, value } = e.target;
        setFormatApply({...FormatApply,[name]:value});
    }
    return(
    <React.Fragment>
    <div>
     <legend>Text Formating</legend>
     <select name="FontFamily" onChange={ApplyChnage}>
     <option> 
     </option>
     </select>
    </div>
    <div>
    <label style={{FormatApply}}>Some Text</label>
    </div>
    </React.Fragment>
    )
}