import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import Input from './Input'
import '../Login_components/login.css'

function Login() {
    const login=useSelector(state=>state.Data.login)
  return (
    <div className='login-cont'>
    <form action="login">
        <h2>Login</h2>
        <Input  placeholder={'Email'} name="login.email" type={'text'} value={login.email} />
        <Input  placeholder={'Password'} name="login.password" type={'text'} value={login.password} />
        <Button  data={login} url="login" text="Log In"/>
    </form>
</div>
  )
}

export default Login