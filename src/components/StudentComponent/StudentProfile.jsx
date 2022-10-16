import '../../styles/StudentStyles/userprofile.css';
import React, { useState,useEffect } from 'react';
import Icon from '../../assets/Icon.svg';
import axios from '../../api/axios';


export default function StudentProfile() {
  const [studentDetails, setStudentDetails] = useState({})
  const [formData, setFormData] = useState({})

  async function updateProfile (){
    console.log('React tire me')
    await  axios.post("http://localhost:8080/api/v1/student/update", formData, {
      headers:{Authorization: localStorage.getItem("token")}

    }).then((responses)=>{
      console.log(responses)
    })
  }
  
  const  getUserDetails = async()=>{ 

    const token = localStorage.getItem("token");  
    const studentId = localStorage.getItem("isStudent")
    try {
      let userData = await axios.get(`http://localhost:8080/api/v1/student/${studentId}`, {
        headers:{
          Authorization:token
        }
      })
      setFormData({
        ...formData, 
        name: userData.data.payload.name,
        email: userData.data.payload.email,
        schoolName: userData.data.payload.schoolName,
        phoneNumber: userData.data.payload.phoneNumber


      }) 
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getUserDetails()
  }, [])
  console.log(studentDetails)
  return (
    <div className='profile-container'>
      <h2>Profile</h2>

      <div className='user-settings'>
        <form className='user-form' onSubmit={updateProfile}>
          <h5 className='user-info'>Basic Information</h5>

          <p className='disclaimer'>Only you can view and edit your information</p>
          
          <label className='user-label'  htmlFor="First Name">Name</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="input-section">
          <input className='formInput form-input' value={formData.name} onChange={(e)=>{setFormData({...formData, name:e.target.value})}} type="text" placeholder='First Name' /><br/>
          <img src={Icon} alt="Icon" />
          </div> 
          </div>


            <label className='user-label'  htmlFor="Phone Number">Phone number</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
          <input className='formInput form-input' value={formData.phoneNumber} type="tel" name='phonenumber' onChange={(e)=>{setFormData({...formData,phoneNumber:e.target.value})}}  placeholder='phone number' /><br/>
          <img src={Icon} alt="Icon" />
          </div>
          </div>


          <label className='user-label'  htmlFor="Email">Email</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
          <input className='formInput form-input' value={formData.email} onChange={(e)=>{setFormData({...formData, email:e.target.value})}}  type="email" name='email' placeholder='Email' /><br/>
          <img src={Icon} alt="Icon" />
          </div>
          </div>


          <label className='user-label'  htmlFor="Name of school">Name of School</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
          <input className='formInput form-input' value={formData.schoolName} onChange={(e)=>{setFormData({...formData, schoolName:e.target.value})}}  type="text" name='nameOfSchool' placeholder='Name of school' /><br/>
          <img src={Icon} alt="Icon" />
          </div>
          </div>

          <button className='saveBtn' type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}
