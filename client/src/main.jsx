import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'

import { router } from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AuthProviderWrapper>
      <RouterProvider router={router} />
    </AuthProviderWrapper>
  </ChakraProvider>
)
