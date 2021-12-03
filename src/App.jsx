import React, {useEffect} from 'react';


// import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddEditProject from './pages/AddEditProject';

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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/add-edit-project" element={<AddEditProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
