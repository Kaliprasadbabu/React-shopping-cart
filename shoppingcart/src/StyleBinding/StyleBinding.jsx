import { useState } from "react"

export function StyleBinding(){
    const[Bordercolor,setBordercolor]=useState({border:'',boxShadow:''});

    const[Hideorshow,setHideorshow]=useState({display:'none'});

    const validation=(e)=>{
        if(e.target.value.length<4)
        {
            setBordercolor({
                border:'2px  solid red',
                boxShadow:'2px 2px 2px red'
            })
        }else{
            setBordercolor({
                border:'2px  solid green',
                boxShadow:'2px 2px 2px green'
            })
        }
    }

    const  ValidationHideorShow=(e)=>{
        debugger
     if(e.target.checked)
     {
        setHideorshow({
            HideorShow:'block'
        })
     }else{
        setHideorshow({
            HideorShow:'none'
        })
     }
    }
return(
    <div className="container-fluid">
    <h2>Style binding</h2>
    <dt>
    User Name
    </dt>
    <dd>
    <input type="text" placeholder="Min 4 char" style={Bordercolor} onChange={validation}/>
    </dd>
    <dt>Terms of service</dt>
    <dd><textarea type="text" placeholder="Terms of service"/></dd>
    <dd>
    <input onChange={ValidationHideorShow} type="checkbox"></input><label> Is it available</label>
    <dd><button style={Hideorshow}>Submitted</button></dd>
    
    </dd>
    {/*<input type="text" style={{border:'2px solid red',boxShadow:'2px 2px 2px red'}}/>*/}

    </div>
)
}