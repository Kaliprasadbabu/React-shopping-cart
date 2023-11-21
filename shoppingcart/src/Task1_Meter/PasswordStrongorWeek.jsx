import { useState } from "react"

export function PasswordStrongorWeek(){

    const [users] = useState([{UserId:'john'}, {UserId:'john12'}, {UserId:'john_nit'}]);
    const [userError, setUserError] = useState('');
    const [isUserValid, setIsUserValid] = useState(false);
    const [capsWarning, setCapsWarning] = useState({display:'none'});

    const[Metervalue,setMetervalue]=useState(0);
    const[BeforeMetervalue,setBeforeMetervalue]=useState(0);
            function Matchvalue(e)
            {
                let Password=e.target.value;
                setBeforeMetervalue(Password.length);
                  debugger
                  if(Password.length==0)
                  { setMetervalue(0);}
                 else if(BeforeMetervalue>Password.length)
                  {
                    setMetervalue(Metervalue-6);
                  }
                  else if(Password.length<=4)
                  {
                    setMetervalue(Metervalue+6);
                  }
                  else if(Password.length>=15)
                  {
                    setMetervalue(100);
                  }
                  else if(Password.length<=15 && Password.length>=4)
                  {
                    setMetervalue(Metervalue+6);
                  } 
                // if(e.which>65 && e.which<=95)
                // {

                // }
            }
    function VerifyUserId(e){
        for(var user of users){
            if(user.UserId===e.target.value){
                setUserError('User Id Taken - Try Another');
                setIsUserValid(false);
                break;
            } else {
                setUserError('User Id Available');
                setIsUserValid(true);
            }
        }
    }


    function VerifyCaps(e){
        debugger
        if(e.which>=65 && e.which<=90){
            setCapsWarning({display: 'block'});
        } else {
            setCapsWarning({display:'none'});
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text" onKeyUp={VerifyUserId} /></dd>
                <dd className={(isUserValid)?'text-success':'text-danger'}>{userError}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password"  onChange={Matchvalue} />
                </dd>
                <dd>
                <meter min="1" max="100" low="20" high="100" optimum="100" value={Metervalue} style={{width:"200px"}}></meter>
                </dd>
                <dd className="text-warning" style={capsWarning}>
                    <div className="bi bi-exclamation-triangle"> Warning - CAPS ON</div>
                </dd>
            </dl>
        </div>
    )
}