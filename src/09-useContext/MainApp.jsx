



import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import UserProvider from './context/UserProvider'


const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
        {/* <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link> */}
        <Navbar />
        <hr />



        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='about' element={ <AboutPage />} />
          <Route path='login' element={ <LoginPage />} />

          {/* <Route path='/*' element={ <LoginPage /> } /> */}

          <Route path='/*' element={ <Navigate to="/about"/> } />
        </Routes>
    </UserProvider>
  )
}

export default MainApp
