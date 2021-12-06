import React, { useState, useEffect } from 'react'
import { Sidebar } from '../components/general'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllProjects } from '../actions'


const Project =  (props) => {
    const { user, getAllProjects } = props
    const { loggedIn } = user
    const [projectRes, setProjectRes] = useState([])

    useEffect(async () => {
        setProjectRes(await getAllProjects());
      }, []);

    if (!loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <div className="project-page">
            <div className="wrapper">
                <Sidebar />
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
                                    <a href="add-edit-project" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Add</a>
                                    <a href="/" className="btn btn-sm btn-outline-info float-end me-1"><i className="fas fa-angle-left"></i> <span className="btn-header">Return</span></a>
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
                                            {projectRes.data?projectRes.data.data.map(p => {
                                                return (
                                                    <tr>
                                                        <td>{p.ProjectId}</td>
                                                        <td>{p.Name}</td>
                                                        <td>{p.ProjectCode}</td>
                                                        <td>{p.Type?'Default':'None'}</td>
                                                        <td>{new Date(p.InitTime).toLocaleString()}</td>
                                                        <td>{new Date(p.StartDate).toLocaleString()}</td>
                                                        <td>{new Date(p.EndDate).toLocaleString()}</td>
                                                        <td>{p.Manager?p.Manager.Name:'Không'}</td>
                                                        <td>{p.ProjectUsers.length}</td>
                                                        <td className="text-end">
                                                            <a href="add_edit_project.html" className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                                            <a href="" className="btn btn-outline-danger btn-rounded"><i className="fas fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    )
                                            }):''}
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


const mapDispatchToProps = (dispatch) => {
    return {
      getAllProjects: () => dispatch(getAllProjects()),
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)