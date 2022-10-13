import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { LeftSideBar, SideBarLink } from '../styles/StudentStyles/SidebarStyles';
import { DashboardContainer, DashboardMainBody } from '../styles/StudentStyles/Studentdashboardstyle';
import "../styles/StudentStyles/style.css"

const StudentDashboard = ({children,studentDetails}) => {

  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false)

const handleLogout = ()=>{
  localStorage.clear()
  navigate('/login') 
}
 

  return (
    <DashboardContainer>
      <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
        <ul>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student">
            <li>
              <i className="fas fa-th-large"></i>
              <p>Overview</p>
            </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student/schools">
            <li>
              <i className="fa fa-school"></i>
              <p>Schools</p>
            </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student/notification">
            <li>
              <i className="fa fa-bell"></i>
              <p>Notifications</p>
            </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student/messaging">
            <li>
              <i className="fa fa-comment-dots"></i>
              <p>Messaging</p>
            </li>
          </SideBarLink>

        </ul>
        <button onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          <span>Logout</span>
        </button>
      </LeftSideBar>
      <DashboardMainBody>
        {children}
      </DashboardMainBody>

    </DashboardContainer>
  )
}


export default StudentDashboard;