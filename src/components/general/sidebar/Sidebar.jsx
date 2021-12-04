import React from 'react'

const Sidebar = (props) => {
    return (
        <nav id="sidebar" className="active">
            <div className="sidebar-header">
                <img src="/img/bootstraper-logo.png" alt="bootraper logo" className="app-logo"/>
            </div>
            <ul className="list-unstyled components text-secondary">
                <li>
                    <a href="dashboard.html"><i className="fas fa-home"></i>Dashboard</a>
                </li>
                <li>
                    <a href="login.html"><i className="fas fa-lock"></i>Login</a>
                </li>
                <li>
                    <a href="log.html"><i className="fas fa-table"></i>Log</a>
                </li>
                <li>
                    <a href="project.html"><i className="fas fa-copy"></i>Project</a>
                </li>
                <li>
                    <a href="sub_task.html"><i className="fas fa-file"></i>Sub Task</a>
                </li>
                <li>
                    <a href="users.html"><i className="fas fa-user-friends"></i>Users</a>
                </li>
            </ul>
        </nav>
    )
}

export default (Sidebar)