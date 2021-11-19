import React from 'react'

function SideBar() {
    return (
        <>
            <nav id="sidebar" class="active">
                <div class="sidebar-header">
                    <img src="./img/bootstraper-logo.png" alt="bootraper logo" class="app-logo"/>
                </div>
                <ul class="list-unstyled components text-secondary">
                    <li>
                        <a href="dashboard.html"><i class="fas fa-home"></i>Dashboard</a>
                    </li>
                    <li>
                        <a href="login.html"><i class="fas fa-lock"></i>Login</a>
                    </li>
                    <li>
                        <a href="log.html"><i class="fas fa-table"></i>Log</a>
                    </li>
                    <li>
                        <a href="project.html"><i class="fas fa-copy"></i>Project</a>
                    </li>
                    <li>
                        <a href="sub_task.html"><i class="fas fa-file"></i>Sub Task</a>
                    </li>
                    <li>
                        <a href="users.html"><i class="fas fa-user-friends"></i>Users</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar
