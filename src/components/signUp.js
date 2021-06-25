import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import { signUp } from "../api/signup"
import { useFormik } from "formik"
import NavBar from "../components/navBar"
import Footer from "../components/footer"

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

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  function validate(values) {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = "First name is required"
    }

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
      firstName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async values => {
      setIsLoading(true)
      // make post request here
      console.log(values)
      const signUserUp = await signUp(values) // post route
      // console.log(signUserUp)

      // TODO: check for other status codes to send different toast messages
      if (signUserUp.status === 409) {
        toast({
          title: "Woah!",
          description: "Email already exists!",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: "Signed up!",
          description: "Congrats on signing up!",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      }
      setIsLoading(false)

      document.getElementById("firstName").value = ""
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
            Register new user
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel mt={4} htmlFor="firstName">
                Your name
              </FormLabel>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.firstName && errors.firstName ? (
                <Text color="red.500">{errors.firstName}</Text>
              ) : null}
            </FormControl>

            <FormControl isRequired>
              <FormLabel mt={4} htmlFor="email">
                Your email:
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

            <FormControl isRequired>
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
            </FormControl>

            <Button
              mt={4}
              colorScheme="purple"
              isLoading={isLoading}
              type="submit"
            >
              Sign Up!
            </Button>
            {/* {msgSent ? (
              <Alert mt={4} status="success">
                <AlertIcon />
                Your message has been sent :)
              </Alert>
            ) : null} */}
          </form>
        </GridItem>
      </Center>
    </Box>
  )
}

export default SignUp
