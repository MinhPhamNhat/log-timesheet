import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/general";

import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { exceptionConstants } from "../constants";
import { Button, Modal } from 'react-bootstrap'
import { getAllLogs, getAllProjects, getAllSubtask, getAllUsers, approveLog, disapproveLog } from '../actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { Error } from '../pages'

const { UNAUTHENTICATED, SUCCESS, PAGE_NOT_FOUND, SERVER_ERROR } = exceptionConstants;
const Log = (props) => {
  const { getAllLogs, getAllProjects, getAllSubtask, getAllUsers, log, project, subtask, user, approveLog, disapproveLog } = props
  const role = parseRole(user.user.Role)
  const [logList, setLogList] = useState([])
  const [userList, setUserList] = useState([])
  const [projectList, setProjectList] = useState([])
  const [subtaskList, setSubtaskList] = useState([])
  const [isShowErrorPage, enableShowError] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const handleApprove = async (id) => {
    const res = await approveLog(id)
    switch (res.code){
      case SUCCESS:
        setRedirect(true)
        NotificationManager.success("Successfully approve", 'Approve',  3000);
        break;
      default:
        NotificationManager.error(res.message, 'Approve',  3000);
        break;
    }
  }

  useEffect(async () => {
    await getAllLogs()
    await getAllProjects()
    await getAllSubtask()
    await getAllUsers()
  }, [])

  useEffect(async () => {
    if (log.code == SUCCESS) {
      console.log(log)
      setLogList(log.logList)
    }

    if (project.code == SUCCESS) {
      console.log(project.projects)
      setProjectList(project.projects)
    }

    if (subtask.code == SUCCESS) {
      console.log(subtask.subtasks)
      setSubtaskList(subtask.subtasks)
    }

    if (user.code == SUCCESS) {
      console.log(user.users)
      setUserList(user.users)
    }

    if (log.code == UNAUTHENTICATED || project.code == UNAUTHENTICATED || subtask.code == UNAUTHENTICATED || user.code == UNAUTHENTICATED) {
      enableShowError(true)
    }

  }, [log.logList, project.projects, subtask.subtasks, user.users])

  if (isShowErrorPage) {
    return <Navigate to="/" />
  }
  if (redirect) {
    setRedirect(false)
    return <Navigate to="/log" />
  }


  return (
    <div className="Log-page">
      <div className="wrapper">
        <Sidebar role={role}/>
        <div id="body" className="active">
          <nav className="navbar navbar-expand-lg navbar-white bg-white">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-light"
            >
              <i className="fas fa-bars"></i>
              <span></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <div className="nav-dropdown">
                    <a
                      href="#"
                      id="nav1"
                      className="nav-item nav-link dropdown-toggle text-secondary"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-link"></i> <span>Quick Links</span>{" "}
                      <i
                        style={{ fontSize: ".8rem" }}
                        className="fas fa-caret-down"
                      ></i>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end nav-link-menu"
                      aria-labelledby="nav1"
                    >
                      <ul className="nav-list">
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-list"></i> Access Logs
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-database"></i> Back ups
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-cloud-download-alt"></i>{" "}
                            Updates
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-user-shield"></i> Roles
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div className="nav-dropdown">
                    <a
                      href="#"
                      id="nav2"
                      className="nav-item nav-link dropdown-toggle text-secondary"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user"></i> <span>John Doe</span>{" "}
                      <i
                        style={{ fontSize: ".8rem" }}
                        className="fas fa-caret-down"
                      ></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                      <ul className="nav-list">
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-address-card"></i> Profile
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-envelope"></i> Messages
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-cog"></i> Settings
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a href="" className="dropdown-item">
                            <i className="fas fa-sign-out-alt"></i> Logout
                          </a>
                        </li>
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
                <h3>Tables</h3>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="card">
                    <div className="card-header row">
                      <div className="page-title row">
                        <div className="col-md-1 col-lg-1">Date</div>
                        <div className="col-lg-2 col-md-2">
                          <form>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control datepicker-here"
                                data-language="en"
                                aria-describedby="datepicker"
                                placeholder="Date picker"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          {/* <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a>  */}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#logtime"
                          >
                            Log Time
                          </button>

                          <div className="modal " id="logtime">
                            <div
                              className="modal-dialog modal-lg"
                              tabIndex="-1"
                              role="dialog"
                              aria-labelledby="myModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Log Time</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                  >
                                    &times;
                                  </button>
                                </div>

                                <div className="modal-body">
                                  <form>
                                    <div className="mb-3 row">
                                      <label className="col-md-2">Note</label>
                                      <div className="col-sm-10">
                                        <textarea
                                          type="text"
                                          name=""
                                          className="form-control"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="mb-3 row">
                                      <label className="col-md-2">User</label>
                                      <div className="col-md-10 select">
                                        <select name="" className="form-select">
                                          <option value="">User 1</option>
                                          <option value="">User 2</option>
                                          <option value="">User 3</option>
                                          <option value="">User 4</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="mb-3 row">
                                      <label className="col-md-2">
                                        Project
                                      </label>
                                      <div className="col-md-10 select">
                                        <select name="" className="form-select">
                                          <option value="">project 1</option>
                                          <option value="">project 2</option>
                                          <option value="">project 3</option>
                                          <option value="">project 4</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="mb-3 row">
                                      <label className="col-md-2">
                                        Sub Task
                                      </label>
                                      <div className="col-md-10 select">
                                        <select name="" className="form-select">
                                          <option value="">sub task 1</option>
                                          <option value="">sub task 2</option>
                                          <option value="">sub task 3</option>
                                          <option value="">sub task 4</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="mb-3 row">
                                      <div className="col-md-2 col-lg-2">
                                        Date
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                        <div>
                                          <div className="">
                                            <input
                                              type="text"
                                              className="form-control datepicker-here"
                                              data-language="en"
                                              aria-describedby="datepicker"
                                              placeholder="Date picker"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mb-3 row">
                                      <div className="col-md-2 col-lg-2">
                                        From
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                        <div>
                                          <input
                                            type="time"
                                            id="appt"
                                            name="appt"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-1 col-lg-1">
                                        To
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                        <div>
                                          <input
                                            type="time"
                                            id="appt"
                                            name="appt"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mb-3 row">
                                      <div className="col-md-2 col-lg-2">
                                        Worked
                                      </div>
                                      <div className="col-sm-2">
                                        <input
                                          type="text"
                                          name=""
                                          className="form-control"
                                          placeholder="0h"
                                        />
                                      </div>
                                    </div>

                                    <div className="mb-3 row">
                                      <div className="col-md-2 col-lg-2">
                                        Estimated remaining
                                      </div>
                                      <div className="col-sm-2">
                                        <input
                                          type="text"
                                          name=""
                                          className="form-control"
                                          placeholder="20h"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>

                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                  >
                                    Log Time
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <p className="card-title"></p>
                      <table
                        className="table table-hover"
                        id="dataTables-example"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Project</th>
                            <th>Sub Task</th>
                            <th>Time</th>
                            <th>Overtime</th>
                            <th>Standard time</th>
                            <th>Note</th>
                            <th>Is Approved</th>
                            <th>Approved date</th>
                          </tr>
                        </thead>
                        <tbody>
                        {logList ? logList.map(p => {
                            return (
                              <tr key={p.LogId}>
                                <td>{p.LogId}</td>
                                <td>{p.User.Name}</td>
                                <td>{p.Subtask.Project.Name}</td>
                                <td>{p.Subtask.Name}</td>
                                <td>{p.DateLog}</td>
                                <td>{p.Overtime}</td>
                                <td>{p.Stdtime}</td>
                                <td>{p.Note}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    checked={p.IsApproved}
                                  />
                                </td>
                                <td>{p.DateApproved ? p.DateApproved : ""}</td>
                                <td>
                                  {user.user.Role===2?'':(!p.IsApproved?<>
                                    <Button variant="outline-success">
                                        <i className="fas fa-check" onClick={()=>handleApprove(p.LogId)}></i>
                                    </Button>
                                  </>:'')}
                                  
                                  
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
      </div>
            <NotificationContainer/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllLogs: () => dispatch(getAllLogs()),
    getAllProjects: () => dispatch(getAllProjects()),
    getAllSubtask: () => dispatch(getAllSubtask()),
    getAllUsers: () => dispatch(getAllUsers()),
    approveLog: (id) => dispatch(approveLog(id)),
    disapproveLog: (id) => dispatch(disapproveLog(id)),
  };
};

const mapStateToProps = (state) => ({
  log: state.log,
  project: state.project,
  subtask: state.subtask,
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
export default connect(mapStateToProps, mapDispatchToProps)(Log);
