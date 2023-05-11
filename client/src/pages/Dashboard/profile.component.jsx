import React, {useEffect, useState} from 'react'
import AddressForm from '../../components/addressForm/addressForm.component';
import { Button } from 'react-bootstrap';
import './profile.styles.css'
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));
  const [upAdd, setupAdd] = useState(false)
  const addr = (user) ? user.address : {};


  function handleClick(e) {
    setupAdd(!upAdd)
  }
  return (
    <div id="My-Account-super-container-fluid box d-flex">
      <div className='heading-account' style={{margin:'20px',textAlign:'center' , fontWeight:'700', marginLeft:'10px', fontSize:'50px'}}>
          <p> My Account</p>
      </div>
      <div className='Account-container'> 
        <div className='float-container'>
            <img  id="img" src="cat.jpg" ></img>
            <div id="user-account-data">  
              <p>{user.name.toUpperCase()}</p>
              <p>{user.email}</p>
              <div className='address-account'>
              {user.address ? (
                <div>
                  <p>Address: <br /> {user.address.door} <br /> {user.address.street}</p>
                  <p>{user.address.city} <br />  Pincode: {user.area_code} <br />{user.address.state} <br /> {user.address.country} </p>
                </div>
              ) : (
                <p>Address not provided</p>
              )}
              </div>
            {
              (upAdd) ? <div className="row"><AddressForm ></AddressForm> </div> : <></> 
            }
            <div className="row-add">
              <Button id={upAdd ? 'hidden Update-address' : 'Update-address'} onClick={handleClick} style={{ width:'max-content'}}>{upAdd ? 'Cancel' : 'Update My Address'}</Button>
            </div>      
          </div>
        </div>
        <div className='float-container'>
          <div id="welcoming" style={{textAlign:'center'}}>
            <h1>Welcome!{user.name.toUpperCase()}</h1>
            <h5> Unify Your Logistics Experience with ONDC Consumer application:
                  Bringing Convenience to Your Doorstep</h5>
          </div>
          <div className='cards-in-row' style={{alignSelf:'center'}}>
            <div className='card-account' style={{backgroundColor:'#dbc3e4'}}onClick={() => window.location.href = '/'}>
              <img  id="image-cards-account" src="/order-icon.jpg"  
                  style={{display:'block', margin:'30px',
                    marginTop:'40px',borderRadius:'50%',
                    width:'150px', height:'150px', 
                    objectFit:'cover', 
                    objectPosition:'center' }}>
              </img>
              <p>Explore & Order &#10140;</p>     
            </div>
            <div className='card-account'style={{backgroundColor:'#d1e4c3'}}onClick={() => window.location.href = '/orders'}>
              <img  id="image-cards-account" src="/parcel.jpg" 
                  style={{display:'block', margin:'30px', 
                        marginTop:'50px',borderRadius:'50%',  
                        width:'140px', height:'140px',  
                        objectFit:'cover', 
                        objectPosition:'center',
                        marginRight:'10px',
                        }}>                          
              </img>
              <p>Monitor Orders &#10140;</p>   
            </div>
          </div>    
        </div>
      </div>
    </div>  
  )
}

export default Profile;
