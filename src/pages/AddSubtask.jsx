import React, { useState, useEffect, } from 'react';
import { Navigate, } from 'react-router-dom'
import { connect } from 'react-redux'
import {Sidebar} from '../components/general'
import { SubtaskAddForm } from '../components/subtask'
import { getAllProjects, addSubtask } from '../actions'
import { exceptionConstants } from '../constants'
import {NotificationContainer, NotificationManager} from 'react-notifications';

const AddSubtask = (props) => {
    const { getAllProjects, user, addSubtask } = props
    const { loggedIn } = user
    const role = parseRole(user.user.Role)
    useEffect(async ()=>{
        await getAllProjects()
    }, [])

    if (!loggedIn) {
        return <Navigate to="/login" />
    }
    return (
        <div className="add-edit-project-page">
            <div className="wrapper">
                <Sidebar role={role} />
                <div id="body" className="active">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white">
                        <button type="button" id="sidebarCollapse" className="btn btn-light">
                            <i className="fas fa-bars"></i><span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ms-auto">
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

                                            <SubtaskAddForm addSubtask={addSubtask} />
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
        addSubtask: (data) => dispatch(addSubtask(data))
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const parseRole = (role)=>{
    if (role === 0){
        return { log: true, project: true, subtask: true, user: true }
    }else if(role === 1){
        return { log: true, project: true, subtask: true, user: true }
    }else if(role === 2){
        return { log: true, project: true, subtask: true }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(AddSubtask)