import React, { useEffect, useState } from 'react'

import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../action/userAction';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProfileScreen = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('')
  const [confPass,setConfPass]= useState('')
  const [msg,setMsg]= useState(null)
  const history = useNavigate()

  const dispatch = useDispatch()
  
  const {userInfo} = useSelector((state)=>state.userLogin)
  const {success} =useSelector((state)=>state.userUpdateProfile)

  useEffect(()=>{
    if(!userInfo){
      history('/login')
    }
  },[dispatch,history,userInfo])

  const submitHandler=(e)=>{
    e.preventDefault()
    if(password !== confPass){
      setMsg("Password Do not match")
    }else{
      const user = {id: userInfo._id,name,email,password}
      dispatch(updateUserProfile(user))
    //   setEmail('')
    //   setPassword('')
    //   setName('')
    //   setConfPass('')
    }
  }
  
  return (
    <Row>
      <Col md={3}>
      <h2>User Profile</h2>
      {msg && <Message variant="info">{msg}</Message>}
      {/* {error &&<Message variant="danger">{error}</Message>}
      {loading && <Loader/>} */}
      {success && <Message variant='sucess'>Profile Updated!</Message>}
      <Form onSubmit={submitHandler} >
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder='enter your name' type='name' onChange={(e)=>setName(e.target.value)} value={userInfo.name}/ >
        </Form.Group>
        <Form.Group controlId='emailId'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder='enter your email address' type='email' onChange={(e)=>setEmail(e.target.value)} value={userInfo.email}/ >
        </Form.Group>
        <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder='enter your password' type='password' onChange={(e)=>{setPassword(e.target.value) || setMsg('')}} value={password}/ >       
        </Form.Group>
        <Form.Group controlId='Confirm password'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control placeholder='enter your confirm password' type='password' onChange={(e)=>setConfPass(e.target.value) || setMsg('')} value={confPass}/ >       
        </Form.Group>
        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
    
  )
}

export default ProfileScreen
