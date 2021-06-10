import React, { useState } from "react"
import { postEmailRoute } from "../api/email"
import { useFormik } from "formik"
import NavBar from "../components/navBar"
import Footer from "../components/footer"

import {
  Box,
  FormLabel,
  Grid,
  Input,
  GridItem,
  Textarea,
  Button,
  Text,
  FormControl,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react"

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  function validate(values) {
    const errors = {}
    if (!values.yourName) {
      errors.yourName = "Required"
    }

    if (!values.yourEmail) {
      errors.yourEmail = "Required"
    }
    if (!values.yourMessage) {
      errors.yourMessage = "Say something"
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
      yourName: "",
      yourEmail: "",
      yourMessage: "",
    },
    validate,
    onSubmit: values => {
      setIsLoading(true)
      // make post request here
      // console.log(values)
      postEmailRoute(values) // post route
      setIsLoading(false)
      toast({
        title: "Email sent!",
        description: "I'll get back to you asap",
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      document.getElementById("yourName").value = ""
      document.getElementById("yourEmail").value = ""
      document.getElementById("yourMessage").value = ""
      // setMsgSent(true)
      // setTimeout(() => {
      //   setMsgSent(false)
      // }, 5000)
      // values = {"yourName":"ramen","yourEmail":"mountains"}
    },
  })
  const toast = useToast()
  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12 }} bg="white">
          <NavBar />
        </GridItem>
      </Grid>

      <GridItem rowSpan={1} colSpan={{ base: 12 }} bg={{ base: "white" }} p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="yourName">
              Your name
            </FormLabel>
            <Input
              id="yourName"
              type="text"
              name="yourName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.yourName && errors.yourName ? (
              <Text color="red.500">{errors.yourName}</Text>
            ) : null}
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="yourEmail">
              Your email:
            </FormLabel>
            <Input
              id="yourEmail"
              type="text"
              name="yourEmail"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.yourEmail && errors.yourEmail ? (
              <Text color="red.500">{errors.yourEmail}</Text>
            ) : null}
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="yourMessage">
              Your message
            </FormLabel>
            <Textarea
              id="yourMessage"
              name="yourMessage"
              onChange={handleChange}
              onBlur={handleBlur}
              mt={4}
              placeholder="Contact me with any questions or opportunities, or just say whats up!"
            />
            {touched.yourMessage && errors.yourMessage ? (
              <Text color="red.500">{errors.yourMessage}</Text>
            ) : null}
          </FormControl>

          <Button
            mt={4}
            colorScheme="linkedin"
            isLoading={isLoading}
            type="submit"
          >
            Send!
          </Button>
          {/* {msgSent ? (
            <Alert mt={4} status="success">
              <AlertIcon />
              Your message has been sent :)
            </Alert>
          ) : null} */}
        </form>
      </GridItem>

      <Footer />
    </Box>
  )
}

export default ContactForm
