import { useLoaderData, useNavigate } from 'react-router-dom'
import authService from '../../services/auth.service'
import Layout from '@/components/Layout'

function Dashboard() {
  const { user } = useLoaderData()
  return (
    <Layout user={user}>
      <h1>Dashboard</h1>
      <h1>Hallo, {user.firstName}</h1>
      <p>
        <img src={user.userpicPath} alt={user.name} />
      </p>
    </Layout>
  )
}

export default Dashboard

export async function loader({ params }) {
  const { data: user } = await authService.verify(params.userId)

  return { user }
}
