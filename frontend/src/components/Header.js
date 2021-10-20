import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../action/userAction'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <h3>Internship-Task</h3>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            {userInfo ? (
              <>
                <LinkContainer to={`/details/${userInfo.user_id}`}>
                  <Nav.Link>
                    <h5>{userInfo.user_name}</h5>
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={logoutHandler}>
                  <h5>Log Out</h5>
                </Nav.Link>
              </>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <h5>Login</h5>
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
