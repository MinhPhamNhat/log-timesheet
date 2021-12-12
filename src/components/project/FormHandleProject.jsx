import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Navigate, } from 'react-router-dom'
import { Sidebar } from '../general'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { exceptionConstants } from '../../constants'
import Select from 'react-select'

const { BAD_REQUEST, SERVER_ERROR, PAGE_NOT_FOUND, SUCCESS, FORBIDDEN } = exceptionConstants

const FormHandleProject = (props) => {
    const { project, user, editProject, id } = props
    const role = parseRole(user.user.Role)
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [type, setType] = useState(true)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [manager, setManager] = useState(null)
    const [managerList, setManagerList] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [staff, setStaff] = useState([])
    const [selectedStaff, setSelectedStaff] = useState([])

    const handleSubmit = async () => {
        const data = {
            Name: name,
            Type: type,
            ProjectCode: code,
            Manager: manager==="null"?null:manager,
            StartDate: new Date(startDate).toLocaleString(),
            EndDate: new Date(endDate).toLocaleString(),
            Staff: selectedStaff.map(s=>s.value)
        }
        const res = await editProject(id, data)
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
                NotificationManager.warning(res.message, 'Access Denied',  3000);
                break;
        }
    }

    const handleStaffSelected = (selectedOpt) => {
        setSelectedStaff(selectedOpt)
    }
    
    useEffect(()=>{
        if (user.code === SUCCESS){
            setManagerList(user.managers);
            setStaff(user.staff)
        }
        if(project.code !== null){
            setName(project.project.Name)
            setCode(project.project.ProjectCode)
            setStartDate(project.project.StartDate)
            setEndDate(project.project.EndDate)
            setType(project.project.Type)
            setManager(project.project.Manager?project.project.Manager.UserId:"null")
            setSelectedStaff(parseSelectedStaff(project.project.ProjectUsers))
        }
    }, [project.project, user.staff, user.managers])
    
    const parseSelectedStaff = (selectedOpt) => {
        return selectedOpt.map(_=>{
            if (user.staff){
                var currStaff = user.staff.filter(s=> s.UserId === _.UserId)
                if (currStaff.length){
                    console.log(currStaff)
                    return {
                        value: currStaff[0].UserId, 
                        label: currStaff[0].Name
                    } 
                }
            }
        })
    }
    const back = () => {
        setRedirect(true)
    }
    if (redirect){
        return <Navigate to="/project" />
    }
    return (
        <div className="add-edit-project-page">
            <div className="wrapper">
                <Sidebar role={role}  />
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
                                <h3>Project</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">Edit Project</div>
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2">Name</label>
                                                <div className="col-sm-10">
                                                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" value={name}/>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2">Code</label>
                                                <div className="col-sm-10">
                                                    <input onChange={(e) => setCode(e.target.value)} type="text" className="form-control" value={code}/>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2">Type</label>
                                                <div className="col-sm-10 row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="default-type" className="col-sm-2 col-form-label">Default</label>
                                                        <input onChange={(e) => setType(true)} id="default-type" type="radio" value="default" checked={type} name="type" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="none-type" className="col-sm-2 col-form-label">None</label>
                                                        <input onChange={(e) => setType(false)} id="none-type" type="radio" value="none" checked={!type} name="type" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <div className="col-md-2 col-lg-2">Start Time</div>
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="">
                                                        <input onChange={(e) => setStartDate(e.target.value)} value={startDate?(new Date(startDate).toISOString().split('T')[0]):""}  type="date" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="Start Time"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <div className="col-md-2 col-lg-2">End Time</div>
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="">
                                                        <input onChange={(e) => setEndDate(e.target.value)} value={endDate?(new Date(endDate).toISOString().split('T')[0]):""} type="date" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="End Time"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <label className="col-md-2">Staff</label>
                                                <div className="col-md-10 select">
                                                    <Select 
                                                    value={selectedStaff}
                                                    onChange={handleStaffSelected}
                                                    isDisabled={type}
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    options={staff?staff.map(s=>{return {value: s.UserId, label: s.Name}}):[]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <label className="col-md-2">Manager</label>
                                                <div className="col-md-10 select">
                                                    <select name="" onChange={(e) => setManager(e.target.value)} value={manager} disabled={type} className="form-select">
                                                        <option value="null">None</option>
                                                        {managerList?managerList.map(m => {
                                                            return (
                                                                <option value={m.UserId} >{m.Name}</option>
                                                            )
                                                        }):''}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="line"></div><br/>
                                            <div className="mb-3 row">
                                                <div className="col-sm-4 offset-sm-2">
                                                    <button onClick={()=>back()}  className="btn btn-secondary mb-2"><i className="fas fa-times"></i> Cancel</button>
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
        </div>)
}


const mapStateToProps = (state) => ({
    project: state.project,
    user: state.user
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

export default connect(mapStateToProps, null)(FormHandleProject)