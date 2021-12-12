import React, { useEffect, useState } from 'react'
import {Sidebar, Logout} from '../components/general'
import { connect } from "react-redux"
import { Navigate } from 'react-router-dom'

import { getAllUsers } from '../actions'

import { Error } from '../pages'
import { exceptionConstants } from "../constants";
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants;

const User = (props) => {

    const { getAllUsers, user } = props
    const { loggedIn } = user
    const role = parseRole(user.user.Role)
    const [userList, setUserList] = useState([])
    const [isShowErrorPage, enableShowError] = useState(false)
    
    useEffect(async () => {
        await getAllUsers()
    }, [])

    useEffect(async () => {
        if (user.code == SUCCESS) {
          setUserList(user.users)
        }
    
        if (user.code == UNAUTHENTICATED) {
          enableShowError(true)
        }
    
    }, [user.users])

    if (isShowErrorPage) {
        return (
            // <_404 status={exceptionStatus.code} message={exceptionStatus.message} />
            <Error />
        )
    }

    if (!loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <div className="user-page">
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
                                <h3>Users
                                </h3>
                            </div>
                            <div className="box box-primary">
                                <div className="box-body">
                                    <table width="100%" className="table table-hover" id="dataTables-example">
                                        <thead>
                                            <tr>
                                                <th>User Id</th>
                                                <th>Role</th>
                                                <th>Position</th>
                                                <th>Name</th>
                                                <th>Username</th>
                                                {/* <th></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userList.map(u => {
                                                return (
                                                    <tr key={u.UserId}>
                                                        <td>{u.UserId}</td>
                                                        <td>{u.Role}</td>
                                                        <td>{u.Position}</td>
                                                        <td>{u.Name}</td>
                                                        <td>{u.Username}</td>
                                                        {/* <td className="text-end">
                                                            <a href="" className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                                            <a href="" className="btn btn-outline-danger btn-rounded"><i className="fas fa-trash"></i></a>
                                                        </td> */}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
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
      getAllUsers: () => dispatch(getAllUsers()),
    };
  };
  
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
export default connect(mapStateToProps, mapDispatchToProps)(User)