import React, { useState, useEffect, } from 'react';
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Sidebar } from '../components/general'
import { getManager, editProject, getProjectById, getStaff } from '../actions'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Error } from '../pages'
import { FormHandleProject } from '../components/project'

const Edit = (props) => {
    const { user, getManager, editProject, getProjectById, getStaff } = props
    const { loggedIn } = user
    // get query id
    const query = new URLSearchParams(window.location.search)
    const id = query.get('id')
    // get managers list
    // get project data

    useEffect(async () => {
        await getManager()
        await getProjectById(id)
        await getStaff()
    }, []);
    
    
    if (!loggedIn) {
        return <Navigate to="/login" />
    }
    return (
        <>
            <FormHandleProject editProject={editProject} id={id} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getManager: () => dispatch(getManager()),
        editProject: (id, data) => dispatch(editProject(id, data)),
        getProjectById: (id) => dispatch(getProjectById(id)),
        getStaff: () => dispatch(getStaff())
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)