import React from 'react'
import '../../style/login.css'

function Login() {
    return (
        <div class="wrapper">
            <div class="auth-content">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="mb-4">
                            <img class="brand" src="./logo.jpg" alt="bootstraper logo"/>
                        </div>
                        <h6 class="mb-4 text-muted">Login to your account</h6>
                        <form action="" method="">
                            <div class="mb-3 text-start">
                                <label for="email" class="form-label">User Name</label>
                                <input type="email" class="form-control" placeholder="Enter User Name" required />
                            </div>
                            <div class="mb-3 text-start">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="Password" required />
                            </div>
                            <div class="mb-3 text-start">
                                <div class="form-check">
                                    <input class="form-check-input" name="remember" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                    Remember me on this device
                                </label>
                                </div>
                            </div>
                            <button class="btn btn-primary shadow-2 mb-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
