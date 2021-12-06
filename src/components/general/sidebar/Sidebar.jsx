import React from 'react'

const Sidebar = (props) => {
    return (
        <nav id="sidebar" className="active">
            <div className="sidebar-header">
                <img src="/img/bootstraper-logo.png" alt="bootraper logo" className="app-logo"/>
            </div>
            <ul className="list-unstyled components text-secondary">
                <li>
                    <a href="/"><i className="fas fa-home"></i>Dashboard</a>
                </li>
                <li>
                    <a href="login"><i className="fas fa-lock"></i>Login</a>
                </li>
                <li>
                    <a href="log"><i className="fas fa-table"></i>Log</a>
                </li>
                <li>
                    <a href="project"><i className="fas fa-copy"></i>Project</a>
                </li>
                <li>
                    <a href="subtask"><i className="fas fa-file"></i>Sub Task</a>
                </li>
                <li>
                    <a href="user"><i className="fas fa-user-friends"></i>Users</a>
                </li>
            </ul>
        </nav>
    )
}

export default (Sidebar)