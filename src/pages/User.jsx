import React, { useEffect, useState } from 'react'
import {Sidebar} from '../components/general'
import { connect } from "react-redux";

import { getAllUsers } from '../actions'

import { Error } from '../pages'
import { exceptionConstants } from "../constants";
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants;

const User = (props) => {

    const { getAllUsers, user } = props

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
                <Sidebar />
                <div id="body" className="active">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white">
                        <button type="button" id="sidebarCollapse" className="btn btn-light">
                            <i className="fas fa-bars"></i><span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <div className="nav-dropdown">
                                        <a href="#" id="nav1" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-link"></i> <span>Quick Links</span> <i style={{ fontSize: ".8rem" }} className="fas fa-caret-down"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end nav-link-menu" aria-labelledby="nav1">
                                            <ul className="nav-list">
                                                <li><a href="" className="dropdown-item"><i className="fas fa-list"></i> Access Logs</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-database"></i> Back ups</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-cloud-download-alt"></i> Updates</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-user-shield"></i> Roles</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="nav-dropdown">
                                        <a href="#" id="nav2" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-user"></i> <span>John Doe</span> <i style={{ fontSize: ".8rem" }} className="fas fa-caret-down"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                                            <ul className="nav-list">
                                                <li><a href="" className="dropdown-item"><i className="fas fa-address-card"></i> Profile</a></li>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-envelope"></i> Messages</a></li>
                                                <li><a href="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</a></li>
                                                <div className="dropdown-divider"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(User)