import React, { useEffect, useState } from "react";
import { Sidebar, Logout } from "../components/general";

import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { exceptionConstants } from "../constants";
import { Button, Modal } from 'react-bootstrap'
import { getAllLogs, getAllSubtask, approveLog, disapproveLog, deleteLog } from '../actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { Error } from "../pages";
import { LogService } from "../services";

const { UNAUTHENTICATED, SUCCESS, PAGE_NOT_FOUND, SERVER_ERROR, CREATED } = exceptionConstants;
const Log = (props) => {
  const { getAllLogs, getAllSubtask, log, subtask, user, approveLog, deleteLog } = props
  const { loggedIn } = user
  const role = parseRole(user.user.Role)
  const [logList, setLogList] = useState([])
  const [subtaskList, setSubtaskList] = useState([])
  const [isShowErrorPage, enableShowError] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [show, setShow] = useState(false);
  const [currId, setCurrId] = useState(null)

  const userAuth = JSON.parse(localStorage.getItem("user"));

  const [note, setNote] = useState("")
  const [stdTime, setStdTime] = useState(0)
  const [overTime, setOverTime] = useState(0)
  const [subtaskId, setSubtaskId] = useState(null)
  const handleShow = (id) => {
    setCurrId(id)
    setShow(true)
  };

  const handleClose = () => setShow(false);
  const handleApprove = async (id) => {
    const res = await approveLog(id)
    switch (res.code){
      case SUCCESS:
        setRedirect(true)
        NotificationManager.success("Successfully approve", 'Approve',  3000);
        await getAllLogs();
        break;
      default:
        NotificationManager.error(res.message, 'Approve',  3000);
        break;
    }
  }

  const handleDelete = async () => {
    const res = await deleteLog(currId)
    if (res.code === SUCCESS){
      await getAllLogs();
      setShow(false)
      NotificationManager.success("Successfully", 'Remove Log',  3000);
    }else {
      console.log(res)
      NotificationManager.error(res.message, 'Remove Log',  3000);
    }
  }

  useEffect(async () => {
    await getAllLogs();
    await getAllSubtask();
  }, []);

  useEffect(async () => {
    if (log.code == SUCCESS) {
      setLogList(log.logList);
    }

    if (subtask.code == SUCCESS) {
      setSubtaskList(subtask.subtasks);
      setSubtaskId(subtask.subtasks[0].SubtaskId)
    }

    if (log.code == UNAUTHENTICATED || subtask.code == UNAUTHENTICATED) {
      enableShowError(true);
    }
  }, [log.logList, subtask.subtasks]);

  const handleSubmitLog = async () => {
    const credentials = {
      Note: note,
      Stdtime: stdTime,
      Overtime: overTime,
      SubtaskId: subtaskId,
      DateLog: (new Date()).toLocaleString("en-US"),
    };

    const res = await LogService.createLogs(credentials);
    if (res.code === CREATED) {
      await getAllLogs();
    } else if (res.code === UNAUTHENTICATED) {
      return <Navigate to="/login" />;
    } else {
      return (
        // <_404 status={exceptionStatus.code} message={exceptionStatus.message} />
        <Error />
      );
    }
  }
  if (redirect) {
    setRedirect(false)
    return <Navigate to="/log" />
  }

  if (!loggedIn) {
    return <Navigate to="/login" />
  }

  if (isShowErrorPage) {
    return (
      // <_404 status={exceptionStatus.code} message={exceptionStatus.message} />
      <Error />
    );
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
              <div className="page-title">
                <h3>Tables</h3>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="card">
                    <div className="card-header row">
                      <div className="page-title row">
                        {/* <div className="col-md-1 col-lg-1">Date</div>
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
                        </div> */}
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
                                          onChange={(e) =>
                                            setNote(e.target.value)
                                          }
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="mb-3 row">
                                      <label className="col-md-2">User</label>
                                      <div className="col-md-10 select">
                                        <select name="" value={userAuth.UserId} className="form-select">
                                          <option value={userAuth.UserId}>
                                            {userAuth.Name}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="mb-3 row">
                                      <label className="col-md-2">
                                        Sub Task
                                      </label>
                                      <div className="col-md-10 select">
                                        <select
                                          name=""
                                          className="form-select"
                                          value={subtaskId}
                                          onChange={(e) =>
                                            setSubtaskId(e.target.value)
                                          }
                                        >
                                          {subtaskList.map((s) => {
                                            return (
                                              <option
                                                value={s.SubtaskId}
                                                selected
                                              >
                                                {s.Name}
                                              </option>
                                            );
                                          })}
                                        </select>
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
                                          placeholder="0"
                                          onChange={(e) =>
                                            setStdTime(e.target.value)
                                          }
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
                                          placeholder="20"
                                          onChange={(e) =>
                                            setOverTime(e.target.value)
                                          }
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
                                    onClick={() => handleSubmitLog()}
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
                                <td>{(new Date(p.DateLog)).toLocaleString()}</td>
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
                                {!p.IsApproved?(<>
                                  <Button variant="outline-danger" onClick={()=>handleShow(p.LogId)}>
                                      <i className="fas fa-trash"></i>
                                  </Button>
                                </>):''}
                                  {user.user.Role===2?'':(!p.IsApproved?<>
                                    <Button variant="outline-success" onClick={()=>handleApprove(p.LogId)}>
                                        <i className="fas fa-check"></i>
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
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Remove log</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to remove this log ? </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllLogs: () => dispatch(getAllLogs()),
    getAllSubtask: () => dispatch(getAllSubtask()),
    approveLog: (id) => dispatch(approveLog(id)),
    disapproveLog: (id) => dispatch(disapproveLog(id)),
    deleteLog: (id) => dispatch(deleteLog(id))
  };
};

const mapStateToProps = (state) => ({
  log: state.log,
  subtask: state.subtask,
  user: state.user,
});

const parseRole = (role)=>{
  if (role === 0){
      return { log: true, project: true, subtask: true, user: true }
  }else if(role === 1){
      return { log: true, project: true, subtask: true, user: true }
  }else if(role === 2){
      return { log: true, project: true, subtask: true }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Log);
