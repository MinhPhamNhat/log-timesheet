import React, {useEffect} from 'react';


// import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddEditProject from './pages/AddEditProject';
import Project from './pages/Project';
import Log from './pages/Log';
import Subtask from './pages/Subtask';
import User from './pages/User';
import Error from './pages/404';

import { connect } from 'react-redux'


import './style/css/login.css'
import './style/css/master.css'
import './style/vendor/fontawesome/css/solid.min.css'
import './style/vendor/fontawesome/css/fontawesome.min.css'
import './style/vendor/fontawesome/css/solid.min.css'
import './style/vendor/fontawesome/css/brands.min.css'
import './style/vendor/bootstrap/css/bootstrap.min.css'
import './style/components/navbar/navbar-dropdowns.css'
import './style/components/sidebar/sidebar-default.css'
import './style/vendor/datatables/datatables.min.css'
import './style/vendor/airdatepicker/css/datepicker.min.css'
import './style/vendor/mdtimepicker/mdtimepicker.min.css'

function App(props) {
  const { user } = props
  const { loggedIn } = user
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/add-edit-project" element={<AddEditProject />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/log" element={<Log />} />
          <Route exact path="/subtask" element={<Subtask />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, null)(App);
