import React from 'react'
import { Image } from 'react-bootstrap'

const UserDetailList = () => {
  return (
    <tr>
      <td>1</td>
      <td>
        <Image
          style={{ width: '60px' }}
          src='https://headshotsuniversal.com/wp-content/uploads/2020/03/Michael_Brosnan_Square_actor_headshot-23-scaled.jpg'
          fluid
        />
      </td>
      <td>Harry Potter</td>
      <td>harry@gmail.com</td>
      <td>23</td>
      <td>14 hour ago</td>
      <td>10 september 2021</td>
    </tr>
  )
}

export default UserDetailList
