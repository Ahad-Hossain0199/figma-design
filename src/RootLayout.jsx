import React from 'react'
import { Outlet } from "react-router";
import NavBar from './Components/NavBar'

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />


    </>
  )
}

export default RootLayout
