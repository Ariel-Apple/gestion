import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Test from './pages/test';
import Contract from './components/Contract/Contract';
import LoginPage from './pages/LoginPage';
 import RegisterPage from './pages/RegisterPage'; 
import { useDispatch, useSelector } from "react-redux";
import InicialPage from './pages/InicialPage';
import Navbar from './components/Home/Navbar/Navbar';
import Carrusel from './components/Home/Inventario/Carrusel';
import Leads from './components/Home/Leads/Leads';
import PanelAdminPage from './pages/PanelAdminPage';
import Register from './components/Register/Register';



function App() {
  const token = useSelector((state) => state.token);

  return (
    <Router>
      {!token && (
        <Routes>

          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='/home/:clientId' element={<Navigate to='/' />} />


        </Routes>
      )}
      {token && (

        <Routes>

          <Route path='/' element={<Navigate to='/home/inventario' />} />
          <Route path='/login' element={<Navigate to='/home/inventario' />} />
          <Route path='/home' element={<Navigate to='/home/inventario' />} />


        </Routes>
      )}
      <Routes>

        <Route exact path='/' element={<InicialPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route path='/test' element={<Test />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Carrusel />} />
          <Route path="inventario" element={<Carrusel />} />
          <Route path="leads" element={<Leads />} />
          <Route path="leads/:clientId" element={<Leads />} />
          <Route path="leads/client/:clientId" element={<Leads />} />
          {/* <Route path="mi sitio" element={<RegisterPage />} /> */}
          <Route path="mi sitio" element={<InicialPage />} />
        </Route>

        <Route path="/admin" element={<PanelAdminPage />}>
          <Route index element={<Register />} />
          <Route path="register" element={<Register />} />
          <Route path="contract" element={<Contract />} />

        
        </Route>
       

      </Routes>

    </Router>
  );
}

export default App;
