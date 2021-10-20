import React, { useState } from 'react'
import { Container, Form, Card, Row, Button } from 'react-bootstrap'

const UpdateDetailScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [image, setImage] = useState('')

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
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='name'
                placeholder='Enter your name'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Enter your email'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                placeholder='Confirm Password'
              />
            </Form.Group>

            <Form.Group controlId='image' className='my-3'>
              <Form.Label className='mx-2'>Choose Image</Form.Label>
              <Form.Control
                value={image}
                type='file'
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Row className='justify-content-center'>
              <Button
                style={{ width: '200px' }}
                type='submit'
                className='btn mt-2'
              >
                Submit Changes
              </Button>
            </Row>
          </Form>
        </Card>
      </Row>
    </Container>
  )
}

export default UpdateDetailScreen
