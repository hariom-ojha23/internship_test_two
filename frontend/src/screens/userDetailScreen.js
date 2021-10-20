import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'

const UserDetailScreen = ({ match, history }) => {
  const [user, setUser] = useState({})
  const id = match.params.id

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`/details/${id}`)
        .then((res) => setUser(res.data))
        .catch((error) => console.log(error.message))
    }

    getUser()
  }, [id])

  const updateDetailBtn = () => {
    history.push(`/login?redirect=update/${user.user_id}`)
  }
  const deleteUserBtn = async () => {
    if (userInfo) {
      await axios
        .delete(`/delete/${id}`)
        .then(() => {
          if (userInfo.user_id === id) {
            localStorage.removeItem('userInfo')
          }
          history.push('/')
        })
        .catch((err) => {
          console.log(`Error: ${err.message}`)
        })
    } else {
      history.push('/login')
    }
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Card className='mt-5 mb-3 px-4 py-3 card'>
          <Row className='justify-content-center'>
            <LinkContainer
              style={{ width: '40%', cursor: 'pointer' }}
              to={`/image/${user.user_id}`}
            >
              <Image
                src='https://headshotsuniversal.com/wp-content/uploads/2020/03/Michael_Brosnan_Square_actor_headshot-23-scaled.jpg'
                roundedCircle
                fluid
              />
            </LinkContainer>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Name :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>{user.user_name}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Email :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>{user.user_email}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Total Orders :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>{user.total_orders}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Last Logged In :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>{user.last_logged_in}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Created At :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>{user.createdAt}</h3>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Button
              style={{ width: '250px' }}
              className='btn my-3'
              onClick={updateDetailBtn}
            >
              Update Details
            </Button>
          </Row>
          {userInfo !== null && userInfo.user_id !== user.user_id ? (
            <Row className='justify-content-center'>
              <Button
                style={{ width: '250px' }}
                className='btn my-3'
                onClick={deleteUserBtn}
                variant='danger'
              >
                Delete User
              </Button>
            </Row>
          ) : (
            <></>
          )}
        </Card>
      </Row>
    </Container>
  )
}

export default UserDetailScreen
