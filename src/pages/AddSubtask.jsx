import React, { useState, useEffect, } from 'react';
import { Navigate, } from 'react-router-dom'
import { connect } from 'react-redux'
import {Sidebar} from '../components/general'
import { getAllProjects } from '../actions'
import { exceptionConstants } from '../constants'
import {NotificationContainer, NotificationManager} from 'react-notifications';

const { BAD_REQUEST, SERVER_ERROR, PAGE_NOT_FOUND, CREATED } = exceptionConstants

const AddSubtask = (props) => {
    const { getAllProjects } = props
    const [projects, setProjects] = useState([])

    useEffect(async ()=>{
        setProjects(await getAllProjects())
    }, [])

    return (
        <div className="add-edit-project-page">
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
                                <h3>Subtask</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">Add</div>
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2">Name</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <label className="col-md-2">Project</label>
                                                <div className="col-md-10 select">
                                                    <select name="" onChange={(e) => setManager(e.target.value)} disabled={type} className="form-select">
                                                        <option value="null">None</option>
                                                        {managers.data?managers.data.data.map(m => {
                                                            return (
                                                                <option value={m.UserId}>{m.Name}</option>
                                                            )
                                                        }):''}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <div className="col-sm-4 offset-sm-2">
                                                    <button className="btn btn-secondary mb-2"><i className="fas fa-times"></i> Cancel</button>
                                                    <button onClick={()=>handleSubmit()} className="btn btn-primary mb-2"><i className="fas fa-save"></i> Save</button>
                                                </div>
                                            </div>
                                        </div>
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
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSubtask)