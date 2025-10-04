import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'

import { Routes,Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import {Loader} from "lucide-react"

const App = () => {
  
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore()        // use of zustank state mangmnt from store

  useEffect(()=>{              // this  for if any time refresh happens so first authentication is checked
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  // loader while auth check complete
  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
          <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>} />       {/* if authenticate then homepage else sent to login */}
      <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to="/login"/>} />
      <Route path="/login" element={!authUser ?  <LoginPage/> : <Navigate to="/login"/>} />
      <Route path="/settings" element={<SettingsPage/>} />
      <Route path="/profile" element={authUser ?<ProfilePage/> : <Navigate to="/login"/>} />
    </Routes>
    </>
  )
}

export default App
