import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import {Paper} from '@mui/material'

export default function Layout() {
	return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 pr-4 pl-4 min-h-0 overflow-auto">
         

          <Outlet />
	
        </div>
      </div>
    </div>
  );
}
