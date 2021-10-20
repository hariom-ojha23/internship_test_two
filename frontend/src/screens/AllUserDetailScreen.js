import React from 'react'
import { Container, Table } from 'react-bootstrap'
import UserDetailList from '../components/UserDetailList'

const AllUserDetailScreen = () => {
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
          <UserDetailList />
        </tbody>
      </Table>
    </Container>
  )
}

export default AllUserDetailScreen
