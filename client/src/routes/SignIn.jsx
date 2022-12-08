import {
  Link as RouterLink,
  Form,
  redirect,
  useNavigate,
} from 'react-router-dom'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import authService from '../services/auth.service'
import { useContext, useState } from 'react'
import { AuthContext } from '@/context/auth.context'

export default function SignIn() {
  const { storeToken, authenticateUser } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    const { data } = await authService.login({ email, password })

    storeToken(data.authToken)
    authenticateUser()
    navigate('/')
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log dich ein</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            und geniesse deine neue{' '}
            <Link as={RouterLink} to={'/'} color={'blue.400'}>
              Möglichkeiten
            </Link>{' '}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleLoginSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Passwort</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Login merken</Checkbox>
                <Link color={'blue.400'}>Passwort vergessen?</Link>
              </Stack> */}
                <Button
                  type={'submit'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Einloggen
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
