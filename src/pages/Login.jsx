import React from 'react'

const Login = (props) => {
    return (
        <div className="login-page">
            <div className="wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <img className="brand" src="/logo.jpg" alt="bootstraper logo"/>
                            </div>
                            <h6 className="mb-4 text-muted">Login to your account</h6>
                            <form action="" method="">
                                <div className="mb-3 text-start">
                                    <label htmlFor="email" className="form-label">User Name</label>
                                    <input type="email" className="form-control" placeholder="Enter User Name" required/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <div className="mb-3 text-start">
                                    <div className="form-check">
                                        <input className="form-check-input" name="remember" type="checkbox" value="" id="check1"/>
                                        <label className="form-check-label" htmlFor="check1">
                                        Remember me on this device
                                    </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Login)