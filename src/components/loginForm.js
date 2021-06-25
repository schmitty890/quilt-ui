import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import { login } from "../api/login"
import { useFormik } from "formik"
import NavBar from "./navBar"
import Footer from "./footer"

import {
  Box,
  FormLabel,
  Input,
  GridItem,
  Button,
  Text,
  FormControl,
  Center,
  Heading,
  useToast,
  InputRightElement,
  InputGroup,
  Link,
} from "@chakra-ui/react"

function validateEmail(value) {
  let error
  if (!value) {
    error = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address"
  }
  return error
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  function validate(values) {
    const errors = {}

    if (!values.email) {
      errors.email = "Emails are required"
    }
    if (!values.password) {
      errors.password = "Need a password"
    }
    return errors
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values, // use this if you want controlled components
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async values => {
      setIsLoading(true)
      // make post request here
      console.log(values)
      const signUserUp = await login(values) // post route
      console.log(signUserUp)

      // TODO: check for other status codes to send different toast messages
      if (signUserUp.status === 401) {
        toast({
          title: "Woah!",
          description: "Wrong email or password",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      } else if (signUserUp.status === 200) {
        toast({
          title: "Logged in. Redirecting to homepage",
          description: "Welcome :)",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        setTimeout(() => {
          window.location.href = "/"
        }, 5000)
      }
      setIsLoading(false)
      document.getElementById("email").value = ""
      document.getElementById("password").value = ""
      // setMsgSent(true)
      // setTimeout(() => {
      //   setMsgSent(false)
      // }, 5000)
      // values = {"firstName":"ramen","email":"mountains"}
    },
  })
  const toast = useToast()
  return (
    <Box>
      <Center>
        <GridItem
          rowSpan={1}
          colSpan={{ base: 12 }}
          bg={{ base: "white" }}
          p={4}
          minWidth={{ base: 100, md: 500 }}
          border="1px"
          borderColor="gray.200"
          borderRadius={5}
          m={4}
        >
          <Heading as="h2" size="xl">
            Login
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel mt={4} htmlFor="email">
                Your email
              </FormLabel>
              <Input
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.email && errors.email ? (
                <Text color="red.500">{errors.email}</Text>
              ) : null}
            </FormControl>

            {/* <FormControl isRequired>
              <FormLabel mt={4} htmlFor="password">
                Password
              </FormLabel>
              <Input
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? (
                <Text color="red.500">{errors.password}</Text>
              ) : null}
            </FormControl> */}

            <FormLabel mt={4} htmlFor="password">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                pr="4.5rem"
                type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {touched.password && errors.password ? (
              <Text color="red.500">{errors.password}</Text>
            ) : null}

            <Button
              mt={4}
              colorScheme="purple"
              isLoading={isLoading}
              type="submit"
            >
              Login
            </Button>

            {/* {msgSent ? (
              <Alert mt={4} status="success">
                <AlertIcon />
                Your message has been sent :)
              </Alert>
            ) : null} */}
          </form>
          <Link href="/newPasswordRequest">
            <Button colorScheme="purple" variant="link" mt={5}>
              Forgot password?
            </Button>
          </Link>
        </GridItem>
      </Center>
    </Box>
  )
}

export default LoginForm
