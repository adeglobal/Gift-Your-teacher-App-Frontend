import React, { useState } from 'react'
import { ImageWrapper, Topbar,TopbarLeftSide, TopbarRighttSide } from '../styles/NavbarStyles';
import Logo from '../assets/Images/Frame12.png'
import UserIcon from '../assets/Images/Ellipse 25.png'
import "../styles/StudentStyles/style.css"

const Navbar = ({studentDetails}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurger = () => setIsOpen(!isOpen);
    return (
        <Topbar>
            <TopbarLeftSide>
                <ImageWrapper>
                    <img src={Logo} alt="" />
                </ImageWrapper>
                <h1>Reward your Teacher</h1>
                <span onClick={handleBurger}><i className='fa fa-bars'></i></span>
            </TopbarLeftSide>
            <TopbarRighttSide>
                <ImageWrapper>
                    <img src={UserIcon} alt="" />
                </ImageWrapper>
                <h3>{studentDetails.name}</h3>
            </TopbarRighttSide>
        </Topbar>
    )
}

export default Navbar