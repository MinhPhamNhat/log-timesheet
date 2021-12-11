import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Navigate, } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { exceptionConstants } from '../../constants'

const { BAD_REQUEST, SERVER_ERROR, PAGE_NOT_FOUND, SUCCESS, FORBIDDEN } = exceptionConstants

const SubtaskEditForm = (props) => {
    const { project, editSubtask, subtask, id } = props

    const [projects, setProjects] = useState([])
    const [selectedProject, setSelectedProject] = useState("")
    const [name, setName] = useState("")
    const [redirect, setRedirect] = useState(false)

    
    useEffect(()=>{
        if (project.code === SUCCESS){
            setProjects(project.projects)
        }
        if (subtask.code === SUCCESS){
            setName(subtask.subtask.Name)
            setSelectedProject(subtask.subtask.Project.ProjectId)
        }
    }, [project, subtask])
    const handleSubmit = async () => {
        const data = {
            Name: name,
            ProjectId: selectedProject,
        }
        const res = await editSubtask(id, data)
        switch(res.code){
            case SUCCESS:
                NotificationManager.success('Update successfully', 'Success',  3000);
                break;
            case BAD_REQUEST:
                NotificationManager.warning(res.message, 'Bad Request',  3000);
                break;
            case PAGE_NOT_FOUND:
                NotificationManager.warning(res.message, 'Not Found',  3000);
                break;
            case SERVER_ERROR:
                NotificationManager.error(res.message, 'Internal Error',  3000);
                break;
            case FORBIDDEN:
                NotificationManager.error(res.message, 'Access Denied',  3000);
                break;
        }
    }

    const back = () => {
        setRedirect(true)
    }
    if (redirect){
        return <Navigate to='/subtask'/>
    }
    return (
        <>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="mb-3 row">
                    <label className="col-sm-2">Name</label>
                    <div className="col-sm-10">
                        <input value={name} type="text" onChange={(e) => setName(e.target.value)} className="form-control"/>
                    </div>
                </div>
                <div className="line"></div><br/>
                <div className="mb-3 row">
                    <label className="col-md-2">Project</label>
                    <div className="col-md-10 select">
                        <select name="" onChange={(e) => setSelectedProject(e.target.value)} value={selectedProject} className="form-select">
                            <option value="null">None</option>
                            {projects.map(p => {
                                return (
                                    <option value={p.ProjectId}>{p.Name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="line"></div><br/>
                <div className="mb-3 row">
                    <div className="col-sm-4 offset-sm-2">
                        <button onClick={()=>back()} className="btn btn-secondary mb-2"><i className="fas fa-times"></i> Cancel</button>
                        <button onClick={()=>handleSubmit()} className="btn btn-primary mb-2"><i className="fas fa-save"></i> Save</button>
                    </div>
                </div>
            </div>
        </>
       )
}


const mapStateToProps = (state) => ({
    project: state.project,
    subtask: state.subtask
})

export default connect(mapStateToProps, null)(SubtaskEditForm)