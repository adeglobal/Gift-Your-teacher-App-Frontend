import React, { useState, useEffect } from 'react'
import axios from "axios";

const Notification = () => {
  const [notification, setNotification] = useState([])

  useEffect(() => {
         const getNotification = async () => { 
            try {
              const response = await axios.get("/api/v1/user-notification"); 
              console.log(response.data);         
              setNotification(response.data);       
                } catch (error) {         
                  console.log(error);       
                }     };     getNotification();   },[]);
                                
  return (
    
  <div className="notificationList">   
  <h2>Notifications</h2>            
    { notification.length > 0 ? notification.map((item) => ( 
                              <div className="notifications">
                                    <p>{item.date}</p>
                                    <p>{item.notificationBody}</p>
                                </div>
                            ) 
                        ) : 
        <h3>No Notification</h3>} 
                    </div>        
     
  )
}

export default Notification