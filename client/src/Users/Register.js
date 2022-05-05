import React, {useState, useEffect} from 'react';

function UserRegistration(props) {
  const [name, setName] = useState(0);
  const [password, setPass] = useState(0);
  const createUser = (e) =>{
    var insert = {'password': password, 'name': name}
    fetch(process.env.REACT_APP_API_URL, 
        {
            method:'POST', 
            body: JSON.stringify(insert),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
        })  
      .then(res => res.json())
      .then(data => console.log(data))
    props.notifyParent();
  }
  return <div>
      <p>
        Sign Up:<br/>
        <input type="text" id="password" onChange={e=>setPass(e.target.value)}/><br/>
        <input type="text" id="name" onChange={e=>setName(e.target.value)}/><br/>
        <button value="Insert New User" onClick={createUser}>Sign Up</button>
      </p>
  </div>;
}

export default UserRegistration;