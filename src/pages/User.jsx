import React, { useEffect, useState } from 'react'
import {Sidebar} from '../components/general'
import { connect } from "react-redux";

import { getAllUsers } from '../actions'

import { Error } from '../pages'
import { exceptionConstants } from "../constants";
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants;

const User = (props) => {

    const { getAllUsers, user } = props
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