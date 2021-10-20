import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import UserDetailList from '../components/UserDetailList'
import axios from 'axios'

const AllUserDetailScreen = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get('/users')
        .then((res) => setUsers(res.data))
        .catch((error) => console.log(`Error: ${error.message}`))
    }

    getUsers()
  }, [])

  return (
    <Container>
      <h1 className='my-4'>All User Details</h1>
      <hr />
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Orders</th>
            <th>Last Logged In</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserDetailList key={index} user={user} />
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default AllUserDetailScreen
