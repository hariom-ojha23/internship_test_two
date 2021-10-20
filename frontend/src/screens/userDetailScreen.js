import React from 'react'
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap'

const UserDetailScreen = () => {
  const updateDetailBtn = () => {}
  const deleteUserBtn = () => {}

  return (
    <Container>
      <Row className='justify-content-center'>
        <Card className='mt-5 mb-3 px-4 py-3 card'>
          <Row className='justify-content-center'>
            <Image
              src='https://headshotsuniversal.com/wp-content/uploads/2020/03/Michael_Brosnan_Square_actor_headshot-23-scaled.jpg'
              roundedCircle
              fluid
              style={{ width: '40%' }}
            />
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Name :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>Harry Potter</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Email :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>harry@gmail.com</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Password :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>123456</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Total Orders :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>23</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Last Logged In :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>14 hours ago</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center my-3'>Created At :</h3>
            </Col>
            <Col>
              <h3 className='text-center my-3'>10 September 2021</h3>
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
        </Card>
      </Row>
    </Container>
  )
}

export default UserDetailScreen
