import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import { LeftSideBar, SideBarLink } from '../styles/StudentStyles/SidebarStyles';
// import { DashboardContainer, DashboardMainBody} from '../styles/TeacherStyles/TeacherDashBoardStyles';
import { Topbar, ImageWrapper,TopbarLeftSide,TopbarRighttSide} from '../styles/NavbarStyles';
import { DashboardContainer, DashboardMainBody } from '../styles/StudentStyles/Studentdashboardstyle';
//import "./style.css"
import UserIcon from '../assets/Images/Ellipse 25.png'
import Logo from '../assets/Images/Frame12.png'



const TeacherDashboard = ({children, teacherDetails}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const navigate = useNavigate();
  // const [teacherDetails, setTeacherDetails] = useContext(ContextProvider)

  const handleLogout = ()=>{
    localStorage.clear()
    navigate('/login') 
  }



  
  return (
    <>
     < Topbar>
        <TopbarLeftSide>
            <ImageWrapper>
                <img src={Logo} alt="" /> 
            </ImageWrapper>
            <h1>Reward your Teacher</h1>
            <span onClick={handleBurger}><i className='fa fa-bars'></i></span>
        </TopbarLeftSide>
        <TopbarRighttSide>
        <h3>Transaction History</h3>
            <ImageWrapper>
                <img src={UserIcon} alt="" /> 
            </ImageWrapper>
            <h3>{teacherDetails.name?.substring(0, 10)}</h3>
        </TopbarRighttSide>
    </Topbar>
   
   <DashboardContainer>
      <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
        <ul>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/teacher" end>
            <li>
              <i className="fas fa-th-large"></i>
              <p>Overview</p>
            </li>
          </SideBarLink> 
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/teacher/notification">
            <li>
              <i className="fa fa-bell"></i>
              <p>Notifications</p>
            </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/teacher/messaging">
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
    </>
  )
}


export default TeacherDashboard