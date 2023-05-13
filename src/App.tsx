import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import User from './components/User/User'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<User/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
