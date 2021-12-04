import React from 'react'
import {Sidebar} from '../components/general'
const Log = (props) => {
    return (
        <div className="Log-page">
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
                                                            <input type="text" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="Date picker"/>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    {/* <a href="" className="btn btn-sm btn-outline-primary float-end"><i className="fas fa-plus-circle"></i> Log Time</a>  */}
                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#logtime">
                                                        Log Time
                                                    </button>

                                                    <div className="modal " id="logtime">
                                                        <div className="modal-dialog modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                            <div className="modal-content">

                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Log Time</h4>
                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                </div>

                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3 row">
                                                                            <label className="col-md-2">Select</label>
                                                                            <div className="col-md-10 select">
                                                                                <select name="" className="form-select">
                                                                                    <option value="">option 1</option>
                                                                                    <option value="">option 2</option>
                                                                                    <option value="">option 3</option>
                                                                                    <option value="">option 4</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-3 row">
                                                                            <label className="col-md-2">Note</label>
                                                                            <div className="col-sm-10">
                                                                                <textarea type="text" name="" className="form-control">
                                                                                </textarea>
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
                                                                            <label className="col-md-2">Project</label>
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
                                                                            <label className="col-md-2">Sub Task</label>
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
                                                                            <div className="col-md-2 col-lg-2">Date</div>
                                                                            <div className="col-lg-3 col-md-3">
                                                                                <div>
                                                                                    <div className="">
                                                                                        <input type="text" className="form-control datepicker-here" data-language="en" aria-describedby="datepicker" placeholder="Date picker"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="mb-3 row">
                                                                            <div className="col-md-2 col-lg-2">From</div>
                                                                            <div className="col-lg-3 col-md-3">
                                                                                <div>
                                                                                    <input type="time" id="appt" name="appt"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-1 col-lg-1">To</div>
                                                                            <div className="col-lg-3 col-md-3">
                                                                                <div>
                                                                                    <input type="time" id="appt" name="appt"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="mb-3 row">
                                                                            <div className="col-md-2 col-lg-2">Worked</div>
                                                                            <div className="col-sm-2">
                                                                                <input type="text" name="" className="form-control" placeholder="0h"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="mb-3 row">
                                                                            <div className="col-md-2 col-lg-2">Estimated remaining</div>
                                                                            <div className="col-sm-2">
                                                                                <input type="text" name="" className="form-control" placeholder="20h"/>
                                                                            </div>
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
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-title"></p>
                                            <table className="table table-hover" id="dataTables-example" width="100%">
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
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dakota Rice</td>
                                                        <td>$36,738</td>
                                                        <td>United States</td>
                                                        <td>Oud-Turnhout</td>
                                                        <td>1</td>
                                                        <td>Dakota Rice</td>
                                                        <td>$36,738</td>
                                                        <td><input type="checkbox" id="vehicle1" name="vehicle1"/></td>
                                                        <td>Oud-Turnhout</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td>Curaçao</td>
                                                        <td>Sinaai-Waas</td>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td><input type="checkbox" id="vehicle1" name="vehicle1"/></td>
                                                        <td>Sinaai-Waas</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Sage Rodriguez</td>
                                                        <td>$56,142</td>
                                                        <td>Netherlands</td>
                                                        <td>Baileux</td>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td><input type="checkbox" id="vehicle1" name="vehicle1"/></td>
                                                        <td>Sinaai-Waas</td>
                                                    </tr>
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
        </div>
    )
}

export default (Log)