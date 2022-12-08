import React from 'react'
import authService from '../../services/auth.service'
import UserCard from './UserCard'

const UserProfile = ({ user }) => {
  return <UserCard {...user} />
}

export default UserProfile

export async function loader({ params }) {
  const { data: user } = await authService.verify(params.userId)

  return { user }
}
