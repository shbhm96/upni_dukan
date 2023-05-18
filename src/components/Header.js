import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
const {userInfo}=useSelector(state=>state.userLogin)

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
            <NavDropdown titile={userInfo.name} id="username">
              <Link to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </Link>
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
