import React from 'react'
import { Flex, Heading, Input, Button,ChakraProvider ,useColorMode, useColorModeValue} from "@chakra-ui/react";

const App = () => {
  const {toggleColorMode} =useColorMode()
  const fromBackground = useColorModeValue('gray.100','gray.700')
  // useColorModeValue('lightmode','darkmode')
  const frombodybackground = useColorModeValue('purple.200','purple.600')
  return (
      <Flex height="100vh" background={frombodybackground} alignItems="center" justifyContent="center">
    <Flex direction="column" background={fromBackground} p={10} rounded={15}>
      <Heading md={6}>Log in</Heading>
      <Input
        placeholder="react@mail.com"
        variant="filled"
        md={3}
        my={2}
        type="email"
      ></Input>
      <Input
        placeholder="**********"
        variant="filled"
        my={2}
        type="password"
        md={6}
      ></Input>
      <Button colorScheme='teal' >Log in</Button>
      <Button mt={3} fontSize='sm' onClick={toggleColorMode}>Toggle Color Mode</Button>
    </Flex>
  </Flex>
  )
}

export default App