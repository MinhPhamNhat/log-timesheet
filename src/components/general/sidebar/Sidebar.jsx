import React from 'react'

const Sidebar = (props) => {
    const { role } = props
    return (
        <nav id="sidebar" className="active">
            <div className="sidebar-header">
                <img src="/img/bootstraper-logo.png" alt="bootraper logo" className="app-logo"/>
            </div>
            <ul className="list-unstyled components text-secondary">
                <li>
                    <a href="/"><i className="fas fa-home"></i>Dashboard</a>
                </li>
                {role.log?(<li>
                    <a href="log"><i className="fas fa-table"></i>Log</a>
                </li>):''}
                {role.project?(<li>
                    <a href="project"><i className="fas fa-copy"></i>Project</a>
                </li>):''}
                {role.subtask?(<li>
                    <a href="subtask"><i className="fas fa-file"></i>Sub Task</a>
                </li>):''}
                {role.user?(<li>
                    <a href="user"><i className="fas fa-user-friends"></i>Users</a>
                </li>):''}
                
            </ul>
        </nav>
    )
}

export default (Sidebar)