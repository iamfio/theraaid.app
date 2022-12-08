import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import SignIn from '@/routes/SignIn'
import SignUp, { action as signUpAction } from '@/routes/SignUp'
import Dashboard, {loader as userLoader } from '../routes/app/Dashboard'

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
    loader: userLoader
    // children: [
    //   {
    //     path: '/',
    //   }
    // ]
  }
])
