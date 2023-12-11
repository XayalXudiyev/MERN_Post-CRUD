import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useToken from '../../api/hooks/useToken'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'

export default function App() {


  const [token] = useToken()

  const { modal } = useSelector(state => state.modal)
  console.log(modal)


  return (
    <div>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route path='/' element={!token?.token ? <Link to={'/auth'} /> : <Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}
