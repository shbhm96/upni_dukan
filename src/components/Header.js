import React, {  } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../action/userAction'

const Header = () => {

  const dispatch = useDispatch()

  const {userInfo}=useSelector(state=>state.userLogin)
  
  const logoutHandler =()=>{
    dispatch(logoutUser())
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
              <Link to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </Link>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
          ):(
            <Link to="/login">
            <i className='fas fa-user'></i>Sign In
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
