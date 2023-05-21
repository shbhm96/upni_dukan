import React, {  } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../action/userAction'

const Header = () => {

  const dispatch = useDispatch()
  const history = useNavigate()

  const {userInfo}=useSelector(state=>state.userLogin)
  
  const logoutHandler =()=>{
    dispatch(logoutUser())
  }
  const profileHandler = () =>{
    history('/profile')
  }

  return (
    <header>
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>     
     <Container>
      <Link to="/">
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link to="/cart">
            <i className='fa fa-shopping-cart'></i>Cart
          </Link>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <NavDropdown.Item onClick={profileHandler}>
                <i class="fa fa-user p-1" aria-hidden="true"></i>
                      Profile
              </NavDropdown.Item>
              
              <NavDropdown.Item onClick={logoutHandler}>
              <i class="fa fa-sign-out p-1" aria-hidden="true"></i>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ):(
            <Link to="/login">
            <i class="fa fa-sign-in" aria-hidden="true"></i>Sign In
        </Link>
          )}          
          </Nav>
        </Navbar.Collapse>
      </Container> 
      </Navbar>
    </header>
  )
}

export default Header
