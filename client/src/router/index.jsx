import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import SignIn from '@/routes/SignIn'
import SignUp, { action as signUpAction } from '@/routes/SignUp'
import Dashboard, { loader as userLoader } from '../routes/app/Dashboard'
import UserProfile, { loader as userProfileLoader } from '../components/user/UserProfile'
import ClientProfile from '../components/client/ClientProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
    action: signUpAction,
  },
  {
    path: '/app/:userId',
    element: <Dashboard />,
    loader: userLoader,
    children: [
      {
        path: 'profile',
        element: <UserProfile />,
        loader: userProfileLoader,
      },
      {
        path: 'clients',
        element: <ClientProfile />,
        // loader: clientProfileLoader,
      },
    ],
  },
])
