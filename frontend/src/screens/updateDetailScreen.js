import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Form, Card, Row, Button } from 'react-bootstrap'
import Message from '../components/Message'
import axios from 'axios'

const UpdateDetailScreen = ({ match, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [totalOrder, setTotalOrder] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const id = match.params.id

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    const goToUsers = () => {
      history.push('/')
    }

    if (message) {
      setTimeout(goToUsers, 500)
    }
  })

  const updateDetail = async () => {
    const data = {
      user_id: id,
      user_name: name,
      user_email: email,
      user_image: image,
      total_orders: totalOrder,
    }

    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios
      .put('/update', data, config)
      .then((res) => {
        setMessage(res.data)
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
        setError(error.message)
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    updateDetail()
  }

  return (
    <Container>
      {message && <Message variant='success'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
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

            <Form.Group className='mb-3' controlId='totalOrder'>
              <Form.Label>Total Order</Form.Label>
              <Form.Control
                value={totalOrder}
                onChange={(e) => setTotalOrder(parseInt(e.target.value))}
                type='text'
                placeholder='Enter total Order'
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
