import React , {useEffect, useState} from 'react'
import '../PagesCss/UserProfile.css'
import profileimage from '../images/profileimage.png'

const UserProfile = (props) => {
    const [userdata, setUser] = useState(null)

    useEffect(()=>{setUser(props.setLoginUser)},[])
  return (
    <>
    <p>start</p>
    {userdata ? (
        <>
        
       
        
        <div className='center'>
          <img src={profileimage} alt="profile image" />

        </div>
        <hr />
        <div className='cardprofile'>

          <h1 className='head'>
            {` ${userdata.name} `}
            <h1>
            {`Email: ${userdata.email} `}
        </h1>

        </h1>
        </div>
        
        </>
    ) : ("")}
    </>
  )
}
export default UserProfile