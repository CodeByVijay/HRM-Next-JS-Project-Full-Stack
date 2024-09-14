import React from 'react'

function Login() {
    return (
        <>
        <div className="login">
            <input type="text" name="username" className='username' id='username'/>
            <input type="password" name="password" className='password' id='username' />
        </div>
        </>
    )
}

export default Login