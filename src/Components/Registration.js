import { useState } from 'react';
import './Registration.css';

const Registration = (props) =>{
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  };

  const passwordChangeHandler = (event) => {
   setPassword(event.target.value)
  };

  const emailChangeHandler = (event) => {
   setEmail(event.target.value)
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const Logon = {
      name:name,
      password:password,
      email:email
    }
    props.onSaveExpenseData(Logon) 
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>User Name</label>
          <input name="name" placeholder="Username" type="text" value={name}
           onChange={nameChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Pasword</label>
          <input name="Password" placeholder="Password" type="password"  value={password}
          onChange={passwordChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Email</label>
          <input name="email " placeholder="Email" type="email"  value={email}
           onChange={emailChangeHandler} 
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Log on</button>
      </div>
    </form>
  );
};

export default Registration;