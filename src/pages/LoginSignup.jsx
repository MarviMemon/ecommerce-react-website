import React from 'react'
import '../pages/CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginSignup'> 
    <div className="logindignup-container">
      <h1>Sign Up</h1>

      <div className="loginsignup-fields">
        <input type="text"  placeholder='Your Name'/>
        <input type="email"  placeholder='Email Address'/>
        <input type="password"  placeholder='password'/>
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account ? <span>login here </span></p>
      <div className="loginsignup-agree">
        <input type="checkbox"  name='' id=''/>
        <p>By continuing , i agree to the terms of use & privacy policy</p>

      </div>
    </div>


    </div>
  )
}
export default LoginSignup