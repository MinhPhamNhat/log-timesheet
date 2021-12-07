import React, { useState, useEffect, } from 'react';
import { Navigate, } from 'react-router-dom'
import { connect } from 'react-redux'
import {Sidebar} from '../components/general'
import { SubtaskEditForm } from '../components/subtask'
import { getAllProjects, editSubtask, getSubtaskById } from '../actions'
import { exceptionConstants } from '../constants'
import {NotificationContainer, NotificationManager} from 'react-notifications';

const AddSubtask = (props) => {
    const { getAllProjects, user, editSubtask, getSubtaskById } = props
    const { loggedIn } = user
    const role = parseRole(user.user.Role)
    const query = new URLSearchParams(window.location.search)
    const id = query.get('id')
    useEffect(async ()=>{
        await getAllProjects()
        await getSubtaskById(id)
    }, [])

    if (!loggedIn) {
        return <Navigate to="/login" />
    }
    return (
        <div className="add-edit-project-page">
            <div className="wrapper">
                <Sidebar role={role}/>
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
                                <h3>Subtask</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">Add</div>

                                            <SubtaskEditForm editSubtask={editSubtask} id={id}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProjects: () => dispatch(getAllProjects()),
        editSubtask: (id, data) => dispatch(editSubtask(id, data)),
        getSubtaskById: (id) => dispatch(getSubtaskById(id))
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})


const parseRole = (role)=>{
    if (role === 0){
        return { log: true, project: true, subtask: true, user: true }
    }else if(role === 1){
        return { log: true, project: true, subtask: true }
    }else if(role === 2){
        return { log: true }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubtask)