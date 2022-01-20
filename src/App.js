import './App.css'
import Form from './Components/Form'
import React, { useState } from 'react'

function App() {


	const [expenses, setExpenses] = useState('')

	const addLogonHandler = (login) => {
		
		setExpenses(login)
	}
	return (
		<div className='Container'>
      <div>
       <Form onLogon={addLogonHandler} />
      </div>
			 <div className='block'> <h1 className='name'>{expenses.name}</h1><h1 className='name'>{expenses.password}</h1><h1 className='name'>{expenses.email}</h1></div>
		</div>
    
	)
}

export default App
