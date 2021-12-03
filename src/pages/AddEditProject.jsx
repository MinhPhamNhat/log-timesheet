import React, {useEffect} from 'react';
const AddEditProject = (props) => {
    return (
        <div classNameName="add-edit-project-page">
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
                                            <i className="fas fa-link"></i> <span>Quick Links</span> <i style={{fontSize: ".8em"}} className="fas fa-caret-down"></i>
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
                                            <i className="fas fa-user"></i> <span>John Doe</span> <i style={{fontSize: ".8em"}} className="fas fa-caret-down"></i>
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
                                <h3>Project</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">Add/Edit Project</div>
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>
                                            <form className="">
                                                <div className="mb-3 row">
                                                    <label className="col-sm-2">Project Id</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" name="" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <label className="col-sm-2">Name</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <label className="col-sm-2">Code</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <label className="col-sm-2">Type</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <div className="col-md-2 col-lg-2">Init Time</div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <form>
                                                            <div className="">
                                                                <input type="text" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="Init Time"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <div className="col-md-2 col-lg-2">Start Time</div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <form>
                                                            <div className="">
                                                                <input type="text" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="Start Time"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div classNameName="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <div className="col-md-2 col-lg-2">End Time</div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <form>
                                                            <div className="">
                                                                <input type="text" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="End Time"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <label className="col-md-2">Manager</label>
                                                    <div className="col-md-10 select">
                                                        <select name="" className="form-select">
                                                            <option value="">option 1</option>
                                                            <option value="">option 2</option>
                                                            <option value="">option 3</option>
                                                            <option value="">option 4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <label className="col-sm-2">Member Amount</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="line"></div><br/>
                                                <div className="mb-3 row">
                                                    <div className="col-sm-4 offset-sm-2">
                                                        <button type="submit" className="btn btn-secondary mb-2"><i className="fas fa-times"></i> Cancel</button>
                                                        <button type="submit" className="btn btn-primary mb-2"><i className="fas fa-save"></i> Save</button>
                                                    </div>
                                                </div>
                                            </form>
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

export default (AddEditProject)