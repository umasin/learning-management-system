import React, {useState} from 'react'
import Login from './pages/Login'
import LMSLanding from './pages/Landingpage2'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import Signin from './pages/signin';
import Resetpass from './pages/Resetpass';

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className=''>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<LMSLanding />}/>
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/resetpass" element={<Resetpass/>}/>
        <Route  path="/Sign In"  element ={<Dashboard/>}/>


      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
