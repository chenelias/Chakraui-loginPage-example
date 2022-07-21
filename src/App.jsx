import React from 'react'
import { Flex, Heading, Input, Button,ChakraProvider } from "@chakra-ui/react";

const App = () => {

  return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background="gray.100" p={10} rounded={15}>
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
    </Flex>
  </Flex>
  )
}

export default App