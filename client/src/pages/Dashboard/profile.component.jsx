import React, {useEffect, useState} from 'react'
import AddressForm from '../../components/addressForm/addressForm.component';
import { Button } from 'react-bootstrap';
import './profile.styles.css'


const Profile = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));
  const [upAdd, setupAdd] = useState(false)
  const addr = (user) ? user.address : {};
  // console.log((addr));
  function handleClick(e) {
    setupAdd(!upAdd)
  }
  return (
    <div className='mt-5 d-flex flex-column justify-content-center container'> 

      <div className="row">
        <span>Welcome ✨</span>
        <h1>{user.name.toUpperCase()}</h1>
      </div>

      {/* <div className='container'> */}
       {
        (upAdd) ? <div className="row"><AddressForm ></AddressForm> </div> : <></> 
       }
       {
        (JSON.stringify(addr) === '{}') ? 
        <div className="row">
          <Button className={upAdd ? 'hidden myBtn' : 'myBtn'} onClick={handleClick}>{upAdd ? 'Cancel' : 'Update Address'}</Button>
        </div> : <></>
      }
       {/* </div> */}
    </div>
  )
}

export default Profile;