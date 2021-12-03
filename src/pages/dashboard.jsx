import React, {useEffect} from 'react';
const Dashboard = (props) => {
    return (
        <div className="dashboard-page">
            <div className="wrapper">
                <nav id="sidebar" className="active">
                    <div className="sidebar-header">
                        <img src="/img/bootstraper-logo.png" alt="bootraper logo" className="app-logo"/>
                    </div>
                    <ul className="list-unstyled components text-secondary">
                        <li>
                            <a href="dashboard.html"><i className="fas fa-home"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="login.html"><i className="fas fa-lock"></i>Login</a>
                        </li>
                        <li>
                            <a href="log.html"><i className="fas fa-table"></i>Log</a>
                        </li>
                        <li>
                            <a href="project.html"><i className="fas fa-copy"></i>Project</a>
                        </li>
                        <li>
                            <a href="sub_task.html"><i className="fas fa-file"></i>Sub Task</a>
                        </li>
                        <li>
                            <a href="users.html"><i className="fas fa-user-friends"></i>Users</a>
                        </li>
                    </ul>
                </nav>
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
                                                        <span className="number">1000</span>
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
                                                        <span className="number">50</span>
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
                                                        <span className="number">200</span>
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
                                                        <span className="number">75</span>
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
                                                <p className="text-muted">1/11/2021 - 7/11/2021</p>
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
                                                        <tr>
                                                            <td>Monday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tuesday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wednesday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Thursday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Friday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Saturday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sunday</td>
                                                            <td>12</td>
                                                            <td className="text-end">20h</td>
                                                        </tr>

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
                                                        <tr>
                                                            <td>Web 1</td>
                                                            <td className="text-end">
                                                                <div className="col-lg-12 col-md-12">
                                                                    {/* <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a> */}
                                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#logtime">
                                                                        Employees List
                                                                    </button>
                                                                    <div className="modal " id="logtime">
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
                                                                                                        <th>Name</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>

                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>

                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Log Time</button>
                                                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Web</td>
                                                            <td className="text-end">
                                                                <div className="col-lg-12 col-md-12">
                                                                    {/* <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a> */}
                                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#logtime">
                                                                        Employees List
                                                                    </button>

                                                                    <div className="modal " id="logtime">
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
                                                                                                        <th>Name</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>

                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>

                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Log Time</button>
                                                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Web 2</td>
                                                            <td className="text-end">
                                                                <div className="col-lg-12 col-md-12">
                                                                    {/* <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a> */}
                                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#logtime">
                                                                        Employees List
                                                                    </button>

                                                                    <div className="modal " id="logtime">
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
                                                                                                        <th>Name</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>

                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>

                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Log Time</button>
                                                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Web 3</td>
                                                            <td className="text-end">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a>
                                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#logtime">
                                                                        Employees List
                                                                    </button>

                                                                    <div className="modal " id="logtime">
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
                                                                                                        <th>Name</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="text-start">1</td>
                                                                                                        <td>Nam</td>
                                                                                                    </tr>

                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>

                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Log Time</button>
                                                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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

export default (Dashboard)