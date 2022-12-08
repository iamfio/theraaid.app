import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import authService from '../../services/auth.service'

import DashboardLayout from '@/components/user/DashboardLayout'

function Dashboard({ children }) {
  // const { useUserDataContext } = useContext(AuthContext)

  const { user } = useLoaderData()
  // const userData = useUserDataContext()

  // console.log(userData)

  return (
    <DashboardLayout user={user}>
      {/* {children} */}
      <Outlet />
    </DashboardLayout>
  )
}

export default Dashboard

export async function loader({ params }) {
  const { data: user } = await authService.verify(params.userId)

  return { user }
}
