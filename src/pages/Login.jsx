// eslint-disable-next-lin
import React, { useState } from 'react'

import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { exceptionConstants } from '../constants'

import { Error } from '../pages'

import { login } from '../actions'

const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

const Login = (props) => {
    const { login } = props

    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")
    const [redirect, enableRedirect] = useState(false)
    const [isShowErrorPage, enableShowError] = useState(false)
    const [exceptionStatus, setExceptionStatus] = useState(null)

    const handleSubmit = async () => {
        const credentials = {
            username: username,
            password: password,
        }
        
        const res = await login(credentials)
        if (res.code === SUCCESS) {
            enableRedirect(true)
        } else if (res.code === UNAUTHENTICATED) {
            // setError('Username or password is incorrect. Please try again')
        } else {
            setExceptionStatus({ code: res.code, message: res.message })
            enableShowError(true)
        }
    }

    if (isShowErrorPage) {
        return (
            // <_404 status={exceptionStatus.code} message={exceptionStatus.message} />
            <Error />
        )
    }

    if (redirect) {
        return <Navigate to="/" />
    }

    return (
        <div className="login-page">
            <div className="wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <img className="brand" src="/logo.jpg" alt="bootstraper logo" />
                            </div>
                            <h6 className="mb-4 text-muted">Login to your account</h6>
                            <form action="" method="">
                                <div className="mb-3 text-start">
                                    <label htmlFor="email" className="form-label">User Name</label>
                                    <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" placeholder="Enter User Name" required />
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input onChange={(e) => setPass(e.target.value)} type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="mb-3 text-start">
                                    <div className="form-check">
                                        <input className="form-check-input" name="remember" type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" htmlFor="check1">
                                            Remember me on this device
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <button onClick={() => handleSubmit()} className="btn btn-primary shadow-2 mb-4">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (credentials) => dispatch(login(credentials)),
    }
}

export default connect(null, mapDispatchToProps)(Login)