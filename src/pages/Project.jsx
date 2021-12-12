import React, { useState, useEffect } from 'react'
import { Sidebar } from '../components/general'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllProjects, deleteProject } from '../actions'
import { Button, Modal } from 'react-bootstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { exceptionConstants } from '../constants'
const { SERVER_ERROR, SUCCESS, PAGE_NOT_FOUND, FORBIDDEN } = exceptionConstants

const Project =  (props) => {
    const { user, project,  getAllProjects, deleteProject } = props
    const role = parseRole(user.user.Role)
    const { loggedIn } = user
    const [projects, setProjects] = useState([])
    const [show, setShow] = useState(false);
    const [currId, setCurrId] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setCurrId(id)
        setShow(true)
    };
    const handleSave = async () => {
        setShow(false)
        const res = await deleteProject(currId)
        if (res.code === PAGE_NOT_FOUND){
            NotificationManager.error(res.message, 'Project notfound',  3000);
        }else if (res.code === FORBIDDEN){
            NotificationManager.error(res.message, 'Access denied',  3000);
        }else if (res.code === SUCCESS){
            NotificationManager.success(res.message, 'Delete Successfully',  3000);
            await getAllProjects()
        }else if (res.code === SERVER_ERROR){
            NotificationManager.error(res.message, 'Internal Exception',  3000);
        }
    }
    useEffect(async () => {
        await getAllProjects();
      }, []);
    
    useEffect(()=>{
        if (project.code !== null){
            setProjects(project.projects)
        }
    }, [project])
    if (!loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <div className="project-page">
            <div className="wrapper">
                <Sidebar role={role} />
                <div id="body" className="active">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white">
                        <button type="button" id="sidebarCollapse" className="btn btn-light">
                            <i className="fas fa-bars"></i><span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <div className="nav-dropdown">
                                        <a href="#" id="nav2" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-user"></i> <span>{user.user.Name} - {user.user.Role === 0 ? 'Admin' : user.user.Role  === 1 ? 'PM' : 'Staff'}</span> <i style={{fontSize: ".8em"}} className="fas fa-caret-down"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                                            <ul className="nav-list">
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
                                {user.user?(user.user.Role===0?(<>
                                    <a href="add" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Add</a>
                                                            </>):''):''}
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
                                            {projects?projects.map(p => {
                                                return (
                                                    <tr key={p.ProjectId}>
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
                                                            {user.user?(user.user.Role===0?(<>
                                                                <a href={"/edit?id="+p.ProjectId} className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                                                <Button variant="outline-danger" onClick={()=>handleShow(p.ProjectId)}>
                                                                    <i className="fas fa-trash"></i>
                                                                </Button>
                                                            </>):''):''}
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
            <NotificationContainer/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Remove project</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to remove this project ? </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleSave}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      getAllProjects: () => dispatch(getAllProjects()),
      deleteProject: (id) => dispatch(deleteProject(id)),
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    project: state.project
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
export default connect(mapStateToProps, mapDispatchToProps)(Project)