

export function ClassBinding()
{
return(
     <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
     <form className="w-25">
       <h2 className="bi bi-person-fill">User login</h2>
       <dl>
       <dt>User Name</dt>
       <dd><input type="text" className="form-control"/></dd>
       <dt>Passwrod</dt>
       <dd><input type="text" className="form-control"/></dd>
       </dl>
       <button className="btn btn-dark w-100">Login</button>
     </form>
     </div>
)
}