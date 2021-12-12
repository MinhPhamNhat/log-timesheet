import React, {useEffect, useState} from 'react';
import {Sidebar, Logout} from '../components/general'

import { Navigate } from 'react-router-dom'
import { getStatistic } from '../actions/dashboard.action'
import { getAllProjects, getAllProjectsFilter } from '../actions/project.action'
import { connect } from 'react-redux'
const Dashboard = (props) => {
    const { user, project, dashboard, getStatistic, getAllProjectsFilter } = props
    const { loggedIn } = user
    const role = parseRole(user.user.Role)
    const [data, setData] = useState({})
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const [projectPagination, setProjectPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const [projects, setProjects] = useState([])
    
    useEffect(async () => {
        await getStatistic()
        await getAllProjectsFilter(limit, currentPage)
    }, [])

    useEffect(()=>{
        if (dashboard.code !== null ){
            setData(dashboard.dashboard)
            setPage(Math.floor(parseInt(dashboard.dashboard.countProject) / limit) + 1)
        }
        if (project.code !== null){
            setProjects(project.projects)
        }
    }, [dashboard, project])

    if (!loggedIn) {
        return <Navigate to="/login" />
    }

    const pageNumbers = [];
    for (let i = 1; i <= page; i++) {
        pageNumbers.push(i);
    }

    const paginationElement = pageNumbers.map(number => {
        if (number == currentPage) {
            return (
                <li className="page-item active" onClick={() => handleSubmitPage(number)} key={number}><a className="page-link" href="#">{number}</a></li>
            )
        }
        else {
            return (
                <li className="page-item" onClick={() => handleSubmitPage(number)} key={number}><a className="page-link" href="#">{number}</a></li>
            )
        }
    });

    const handleSubmitPage = async(number) => {
        setCurrentPage(number)
        await getAllProjectsFilter(limit, number)
    }

    const handlePreviousPagination = async() => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
            await getAllProjectsFilter(limit, currentPage - 1)
        }
    }

    const handleNextPagination = async() => {
        if (currentPage != page) {
            setCurrentPage(currentPage + 1)
            await getAllProjectsFilter(limit, currentPage + 1)
        }
    }
    return (
        <div className="dashboard-page">
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
                                        <Logout />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 page-header">
                                    <div className="page-pretitle">Overview</div>
                                    <h2 className="page-title">Dashboard</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="icon-big text-center">
                                                        <i className="teal fas fa-project-diagram"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="detail">
                                                        <p className="detail-subtitle">Total Projects</p>
                                                        <span className="number">{data.countProject}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="fas fa-calendar"></i> For this Month
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="icon-big text-center">
                                                        <i className="olive fas fa-user-tie"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="detail">
                                                        <p className="detail-subtitle">Total PM</p>
                                                        <span className="number">{data.countPM}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="fas fa-stopwatch"></i>Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="icon-big text-center">
                                                        <i className="violet fas fa-users"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="detail">
                                                        <p className="detail-subtitle">Total Employees</p>
                                                        <span className="number">{data.countUser}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="fas fa-stopwatch"></i> Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="icon-big text-center">
                                                        <i className="orange fas fa-tasks"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="detail">
                                                        <p className="detail-subtitle">Total Logs</p>
                                                        <span className="number">{data.countLog}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="fas fa-envelope-open-text"></i> For this Week
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="head">
                                                <h5 className="mb-0">Log Time Sheet Current Week</h5>
                                                <p className="text-muted">{getMonday(new Date()).toDateString()} - {getSunday(new Date()).toDateString()}</p>
                                            </div>
                                            <div className="canvas-wrapper">
                                                <table className="table table-striped">
                                                    <thead className="success">
                                                        <tr>
                                                            <th>Week</th>
                                                            <th>Total Log</th>
                                                            <th className="text-end">Total Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.currentLogs?(<>
                                                            <tr>
                                                                <td>Monday</td>
                                                                <td>{data.currentLogs.totalLog[0]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[0]}h</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tuesday</td>
                                                                <td>{data.currentLogs.totalLog[1]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[1]}h</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Wednesday</td>
                                                                <td>{data.currentLogs.totalLog[2]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[2]}h</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Thursday</td>
                                                                <td>{data.currentLogs.totalLog[3]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[3]}h</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Friday</td>
                                                                <td>{data.currentLogs.totalLog[4]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[4]}h</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Saturday</td>
                                                                <td>{data.currentLogs.totalLog[5]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[5]}h</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sunday</td>
                                                                <td>{data.currentLogs.totalLog[6]}</td>
                                                                <td className="text-end">{data.currentLogs.totalTime[6]}h</td>
                                                            </tr>
                                                        </>):''}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="head">
                                                <h5 className="mb-0">Management Projets</h5>
                                            </div>
                                            <div className="canvas-wrapper">
                                                <table className="table table-striped">
                                                    <thead className="success">
                                                        <tr>
                                                            <th>Projects</th>
                                                            <th className="text-end">Employees</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {projects.map((p, i)=>{
                                                            return (
                                                            <tr key={p.ProjectId}>
                                                                <td>{p.Name}</td>
                                                                    <td className="text-end">
                                                                        <div className="col-lg-12 col-md-12">
                                                                            {/* <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a> */}
                                                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#logtime-"+p.ProjectId}>
                                                                                Employees List
                                                                            </button>
                                                                            <div className="modal " id={"logtime-"+p.ProjectId}>
                                                                                <div className="modal-dialog modal-sm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                                                    <div className="modal-content">
                                                                                        <div className="modal-header">
                                                                                            <h4 className="modal-title">Employees List</h4>
                                                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                        </div>

                                                                                        <div className="modal-body">
                                                                                            <form>
                                                                                                <div className="canvas-wrapper">
                                                                                                    <table className="table table-striped">
                                                                                                        <thead className="success">
                                                                                                            <tr>
                                                                                                                <th className="text-start">UserId</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            {p.ProjectUsers.map(u=>{
                                                                                                                return (
                                                                                                                    <tr key={u.UserId}>
                                                                                                                        <td className="text-start">{u.UserId}</td>
                                                                                                                    </tr>
                                                                                                                )
                                                                                                            })}

                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                        <div className="modal-footer">
                                                                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <nav aria-label="Pagination">
                                                <ul className="pagination">
                                                    <li className="page-item" onClick={() => handlePreviousPagination()}><a className="page-link" href="#">Previous</a></li>
                                                    {paginationElement}
                                                    <li className="page-item" onClick={() => handleNextPagination()}><a className="page-link" href="#">Next</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="dfd text-center">
                                                    <i className="blue large-icon mb-2 fas fa-thumbs-up"></i>
                                                    <h4 className="mb-0">+21,900</h4>
                                                    <p className="text-muted">FACEBOOK PAGE LIKES</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="dfd text-center">
                                                    <i className="orange large-icon mb-2 fas fa-reply-all"></i>
                                                    <h4 className="mb-0">+22,566</h4>
                                                    <p className="text-muted">INSTAGRAM FOLLOWERS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="dfd text-center">
                                                    <i className="grey large-icon mb-2 fas fa-envelope"></i>
                                                    <h4 className="mb-0">+15,566</h4>
                                                    <p className="text-muted">E-MAIL SUBSCRIBERS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="dfd text-center">
                                                    <i className="olive large-icon mb-2 fas fa-dollar-sign"></i>
                                                    <h4 className="mb-0">+98,601</h4>
                                                    <p className="text-muted">TOTAL SALES</p>
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
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatistic: () => dispatch(getStatistic()),
        getAllProjects: () => dispatch(getAllProjects()),
        getAllProjectsFilter: (limit, page) => dispatch(getAllProjectsFilter(limit, page)),
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    dashboard: state.dashboard,
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

function getMonday(d) {
d = new Date(d);
var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6:1) ; // adjust when day is sunday
return new Date(d.setDate(diff));
}

function getSunday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1) + 6; // adjust when day is sunday
    return new Date(d.setDate(diff));
    }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)