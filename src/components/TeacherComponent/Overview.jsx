import axios from 'axios'
import React from 'react'
import { useState, useEffect  } from 'react'
import { BottomBoxSection,  OverviewWrapper, TopBoxSection, TransactionDetails } from '../../styles/TeacherStyles/OverviewStyles'



const Overview = ({teacherDetails}) => {
const [transactionState, setTransactionState] = useState({})


  const TransactionHistory = async() =>{

    try{
    const token = localStorage.getItem("token")
  
   const transaction =await axios.get('http://localhost:8080/api/v1/authUser/transaction-history', {
      headers:{
        Authorization: token
      }
    })
  // console.log(transaction.data.payload)
  setTransactionState(transaction.data.payload)
  console.log((transactionState));
    }catch (error){
      alert('an error occured')
      console.log(error)
    }

  
  }

  useEffect(()=>{
    TransactionHistory()
  },[])


  return (
    <OverviewWrapper>
      <h2>My Dashboard</h2>
      <TopBoxSection>
        <div>
          <h4>My Wallet Balance</h4>
          <p>Account is active</p>
        </div>
        <h1>&#8358;{teacherDetails.wallet}</h1>
       <div>
       Total money received
       </div>
      </TopBoxSection>
      <BottomBoxSection>
        <TransactionDetails >
            {/* {transactionState.length > 0 ? <>
                    {transactionState?.map((data)=>{

                                  <div>
                                  <h4>Total Money Sent</h4>
                                  <h1>N24,500</h1>
                                  <p>Sent</p>
                                  </div>


                    })
                    }
                    </>: 
                    <>
                          <p>NO TRANSACTION FOUND jjj</p>
                    </>
                    }
          <span>
            <img src="img/Vector (8).png" alt="" />
          </span> */}

              <table >
                      <tr>
                          <th>Most recent</th>
                          <th><div>New</div></th>
                      </tr>
                      
                      <tr>
                          <td>
                            <h4>Babajide sent you N10,000</h4>
                            <h6>5/05/2022</h6>
                          </td>
                          <td><p>View student</p></td>
                      </tr>
                      <tr>
                          <td>
                            <h4>Babajide sent you N10,000</h4>
                            <h6>5/05/2022</h6>
                          </td>
                          <td><p>View student</p></td>

                      </tr>
                      <tr>
                          <td>
                            <h4>Babajide sent you N10,000</h4>
                            <h6>5/05/2022</h6>
                          </td>
                          <td><p>View student</p></td>
                      </tr>
                      <tr>
                          <td>
                            <h4>Babajide sent you N10,000</h4>
                            <h6>5/05/2022</h6>
                          </td>
                          <td><p>View student</p></td>
                      </tr>
                      <tr>
                          <td>
                            <h4>Babajide sent you N10,000</h4>
                            <h6>5/05/2022</h6>
                          </td>
                          <td><p>View student</p></td>
                      </tr>
              </table>
        </TransactionDetails>
      </BottomBoxSection>
    </OverviewWrapper>
  )
}

export default Overview