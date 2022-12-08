import { Link as RouterLink, Form, redirect } from 'react-router-dom'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import authService from '../services/auth.service'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Registriere
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            und geniesse deine neue Möglichkeiten ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Form method="post">
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Vorname</FormLabel>
                    <Input type="text" name={'firstName'} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Nachname</FormLabel>
                    <Input type="text" name={'lastName'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email Adresse</FormLabel>
                <Input type="email" name={'email'} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Passwort</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name={'password'}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      // type={'submit'}
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Los geht's!
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Bereits registriert?{' '}
                  <Link as={RouterLink} to={'/signin'} color={'blue.400'}>
                    Einloggen
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const user = Object.fromEntries(formData)

  await authService.signup(user)
  return redirect('/')
}
