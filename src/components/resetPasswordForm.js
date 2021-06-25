import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import { submitNewPassword } from "../api/newPassword"
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
} from "@chakra-ui/react"

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  function validate(values) {
    const errors = {}

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
      password: "",
      token: "",
    },
    validate,
    onSubmit: async values => {
      console.log("WE ARE SUBMITTING RESET PASS")
      setIsLoading(true)
      var loc = window.location.href
      loc =
        loc.lastIndexOf("/") == loc.length - 1
          ? loc.substr(0, loc.length - 1)
          : loc.substr(0, loc.length + 1)
      var targetValue = loc.substr(loc.lastIndexOf("/") + 1)
      console.log(targetValue)
      values.token = targetValue
      // make post request here
      console.log(values)

      const newPasswordForUser = await submitNewPassword(values) // post route
      console.log(newPasswordForUser)

      // TODO: check for other status codes to send different toast messages
      if (newPasswordForUser.status === 422) {
        toast({
          title: "Woah!",
          description: "Go request a new password again",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      } else if (newPasswordForUser.status === 200) {
        toast({
          title: "Password reset. YAY!",
          description: "Welcome back :)",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        // setTimeout(() => {
        //   window.location.href = "/"
        // }, 5000)
      }
      setIsLoading(false)
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
            Reset Password
          </Heading>
          <form onSubmit={handleSubmit}>
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
              Set new password
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

      <Footer />
    </Box>
  )
}

export default ResetPasswordForm
