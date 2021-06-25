import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import { login } from "../api/login"
import { useFormik } from "formik"
import NavBar from "./navBar"
import Footer from "./footer"
import { resetPasswordEmailSubmit } from "../api/resetPassword"

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

function validateEmail(value) {
  let error
  if (!value) {
    error = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address"
  }
  return error
}

const ResetPasswordRequestForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  function validate(values) {
    const errors = {}

    if (!values.email) {
      errors.email = "Emails are required"
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
    },
    validate,
    onSubmit: async values => {
      setIsLoading(true)
      // make post request here
      console.log(values)
      const submitEmailToResetPassword = await resetPasswordEmailSubmit(values) // post route
      console.log(submitEmailToResetPassword)

      // TODO: check for other status codes to send different toast messages
      if (submitEmailToResetPassword.status === 422) {
        toast({
          title: "Woah!",
          description: "User with that email does not exist",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      } else if (submitEmailToResetPassword.status === 200) {
        toast({
          title: "Check your email. We sent you a link to reset your password.",
          description: ":)",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        //   setTimeout(() => {
        //     window.location.href = "/"
        //   }, 5000)
      }
      setIsLoading(false)
      document.getElementById("email").value = ""
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
            Request password reset
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

            <Button
              mt={4}
              colorScheme="purple"
              isLoading={isLoading}
              type="submit"
            >
              Request to reset my password
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

export default ResetPasswordRequestForm
