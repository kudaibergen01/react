import './App.css'
import Form from './Components/Form'
import React, { useState } from 'react'

function App() {


	const [expenses, setExpenses] = useState('')

	const addLogonHandler = (login) => {
		// console.log("In App.js")
		console.log(login)
		setExpenses(login)
	}
	return (
		<div className='Container'>
      <div>
       <Form onLogon={addLogonHandler} />
      </div>
			 <div className='block'><h1 className='email'>{expenses.email}</h1><h1>{expenses.password}</h1><h1>{expenses.name}</h1></div>
		</div>
    
	)
}

export default App
