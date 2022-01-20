import SingnupForm from "./SingnupForm";
import SignupFormSuccess from "./SignupFormsuccess";
import React, { useState } from 'react'
const Form = () => {
const[formIsSubmitted, setFormIsSubmitted] = useState(false)
const submitForm = () => {
    setFormIsSubmitted(true)
}
   return (
   <div>
       {!formIsSubmitted ? (
           <SingnupForm submitForm={submitForm} />
       ) : (
           <SignupFormSuccess />
       )}
   </div>
   )
}
export default Form;