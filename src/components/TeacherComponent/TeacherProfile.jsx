import '../../styles/StudentStyles/userprofile.css';
import React, { useState,useEffect } from 'react';
import Icon from '../../assets/Icon.svg';


export default function TeacherProfile({teacherDetails}) { 
  const [formData, setFormData] = useState({})
  const  getUserDetails = async()=>{ 
 
    console.log(teacherDetails)
      setFormData({
        ...formData, 
        name:teacherDetails.name,
        email: teacherDetails.email,
        schoolName: teacherDetails.schoolName

      })  
  }

  useEffect(()=>{

    getUserDetails()
  }, [])
  return (
    <div className='profile-container'>
      <h2>Profile</h2>

      <div className='user-settings'>
        <form className='user-form'>
          <h5 className='user-info'>Basic Information</h5>

          <p className='disclaimer'>Only you can view and edit your information</p>
          
          <label className='user-label'  htmlFor="First Name">First Name</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="input-section">
          <input className='formInput form-input' value={formData.name} onChange={(e)=>{setFormData({...formData, name:e.target.value})}} type="text" placeholder='First Name' /><br/>
          <img src={Icon} alt="Icon" />
          </div> 
          </div>


          <label className='user-label'  htmlFor="Last Name">Last Name</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
              <input className='formInput form-input' type="text" name='lastname' placeholder='Last Name' /><br/>
              <img src={Icon} alt="Icon" />
            </div>
          </div>


            <label className='user-label'  htmlFor="Phone Number">Phone number</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
          <input className='formInput form-input' type="tel" name='phonenumber' placeholder='phone number' /><br/>
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
