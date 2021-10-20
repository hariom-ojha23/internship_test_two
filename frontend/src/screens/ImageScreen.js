import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'

const ImageScreen = () => {
  return (
    <Container>
      <Row
        style={{ height: '100vh' }}
        className='justify-content-center align-items-center'
      >
        <Image
          src='https://headshotsuniversal.com/wp-content/uploads/2020/03/Michael_Brosnan_Square_actor_headshot-23-scaled.jpg'
          style={{ width: '70%' }}
        />
      </Row>
    </Container>
  )
}

export default ImageScreen
