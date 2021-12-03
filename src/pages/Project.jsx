import React from 'react'

const Project = (props) => {
    return (
        <div className="project-page">
            <div className="wrapper">
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
                <div id="body" className="active">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white">
                        <button type="button" id="sidebarCollapse" className="btn btn-light">
                            <i className="fas fa-bars"></i><span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <div className="nav-dropdown">
                                        <a href="#" id="nav1" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-link"></i> <span>Quick Links</span> <i style={{fontSize: ".8em"}} className="fas fa-caret-down"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end nav-link-menu" aria-labelledby="nav1">
                                            <ul className="nav-list">
                                                <li><a href="" className="dropdown-item"><i className="fas fa-list"></i> Access Logs</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-database"></i> Back ups</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-cloud-download-alt"></i> Updates</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-user-shield"></i> Roles</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="nav-dropdown">
                                        <a href="#" id="nav2" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-user"></i> <span>John Doe</span> <i style={{fontSize: ".8em"}} className="fas fa-caret-down"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                                            <ul className="nav-list">
                                                <li><a href="" className="dropdown-item"><i className="fas fa-address-card"></i> Profile</a></li>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-envelope"></i> Messages</a></li>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container">
                            <div className="page-title">
                                <h3>Projects
                                    <a href="add_edit_project.html" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Add</a>
                                    <a href="dashboard.html" className="btn btn-sm btn-outline-info float-end me-1"><i className="fas fa-angle-left"></i> <span className="btn-header">Return</span></a>
                                </h3>
                            </div>
                            <div className="box box-primary">
                                <div className="box-body">
                                    <table width="100%" className="table table-hover" id="dataTables-example">
                                        <thead>
                                            <tr>
                                                <th>Project Id</th>
                                                <th>Name</th>
                                                <th>Code</th>
                                                <th>Type</th>
                                                <th>Init Time</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Manager</th>
                                                <th>Member Amount</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Social Website</td>
                                                <td>123</td>
                                                <td>Web</td>
                                                <td>20/08/2021</td>
                                                <td>12/08/2021</td>
                                                <td>13/08/2021</td>
                                                <td>Nam</td>
                                                <td>10</td>
                                                <td className="text-end">
                                                    <a href="add_edit_project.html" className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                                    <a href="" className="btn btn-outline-danger btn-rounded"><i className="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Social Website</td>
                                                <td>123</td>
                                                <td>Web</td>
                                                <td>20/08/2021</td>
                                                <td>12/08/2021</td>
                                                <td>13/08/2021</td>
                                                <td>Nam</td>
                                                <td>10</td>
                                                <td className="text-end">
                                                    <a href="add_edit_project.html" className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                                    <a href="" className="btn btn-outline-danger btn-rounded"><i className="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Social Website</td>
                                                <td>123</td>
                                                <td>Web</td>
                                                <td>20/08/2021</td>
                                                <td>12/08/2021</td>
                                                <td>13/08/2021</td>
                                                <td>Nam</td>
                                                <td>10</td>
                                                <td className="text-end">
                                                    <a href="add_edit_project.html" className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                                    <a href="" className="btn btn-outline-danger btn-rounded"><i className="fas fa-trash"></i></a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Project)