import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

const Logout = () => {
    const [redirect, enableRedirect] = useState(false)
    const handleSubmitLogout = () => {
        localStorage.clear()
        enableRedirect(true)
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return (
        <div className="dropdown-menu dropdown-menu-end nav-link-menu">
            <ul className="nav-list">
                <li onClick={() => handleSubmitLogout()}><a href="" className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        </div>
    )
}

export default (Logout)