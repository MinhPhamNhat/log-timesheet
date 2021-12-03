import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
