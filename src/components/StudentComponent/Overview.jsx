import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BottomBoxSection, GreenTop, OverviewWrapper, TopBoxSection, TransactionDetails } from '../../styles/StudentStyles/OverviewStyles'
import Payment from '../PaymentModal'

const Overview = () => {
  const [toggleModal, setToggleModal ] = useState(false)
  
  function handleClick(){
    setToggleModal(true)
  }


  const [studentDetails, setStudentDetails] = useState({})

  const  getUserDetails = async()=>{ 

    const token = localStorage.getItem("token");  
    const studentId = localStorage.getItem("isStudent")
    try {
      let userData = await axios.get(`http://localhost:8080/api/v1/student/${studentId}`, {
        headers:{
          Authorization:token
        }
      })
      setStudentDetails(userData.data.payload) 
    } catch (error) {
      
    }
  }

  useEffect(()=>{
  getUserDetails();
  },[studentDetails])

  return (
    <OverviewWrapper>
      <h2>My Dashboard</h2>
      <TopBoxSection>
        <div>
          <h4>My Wallet Balance</h4>
          <p>Account is active</p> 
        </div>
        <h1>&#8358;{studentDetails?.wallet}</h1>
        <button onClick={handleClick}>
        <img src="" alt="" />
          <span>Add money</span>
        </button>
      </TopBoxSection>
      <BottomBoxSection>
        <GreenTop></GreenTop>
        <TransactionDetails>
          <div>
            <h4>Total Money Sent</h4>
            <h1>N24,500</h1>
            <p>Sent</p>
          </div>
          <span>
            <img src="img/Vector (8).png" alt="" />
          </span>
        </TransactionDetails>
      </BottomBoxSection>

    {toggleModal && 
    <Payment 
    studentDetails={studentDetails} 
    setStudentDetails={setStudentDetails}  
    setToggleModal={setToggleModal}/>}
    
    </OverviewWrapper>
  )
}

export default Overview