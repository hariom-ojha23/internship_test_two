import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Image } from 'react-bootstrap'

const UserDetailList = ({ user, index }) => {
  return (
    <LinkContainer
      style={{ textDecoration: 'none', cursor: 'pointer' }}
      to={`/details/${user.user_id}`}
    >
      <tr>
        <td>{index}</td>
        <td>
          <Image
            style={{ width: '60px' }}
            src='https://headshotsuniversal.com/wp-content/uploads/2020/03/Michael_Brosnan_Square_actor_headshot-23-scaled.jpg'
            fluid
          />
        </td>
        <td>{user.user_name}</td>
        <td>{user.user_email}</td>
        <td>{user.total_orders}</td>
        <td>{user.last_logged_in}</td>
        <td>{user.createdAt}</td>
      </tr>
    </LinkContainer>
  )
}

export default UserDetailList
