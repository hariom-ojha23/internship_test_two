import React from 'react'
import { Container, Form, Card, Row, Button } from 'react-bootstrap'

const updateDetailScreen = () => {
  const submitHandler = () => {}

  return (
    <Container>
      <Row className='justify-content-center'>
        <Card className='my-5 px-5 py-3 card'>
          <h1 className='py-4'>update user details</h1>
          <hr />
          <Form className='my-3' onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type='name' placeholder='Enter your name' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter your email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Confirm Password' />
            </Form.Group>

            <Button
              style={{ width: '250px' }}
              type='submit'
              className='btn mt-2'
            >
              Submit Changes
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  )
}

export default updateDetailScreen
