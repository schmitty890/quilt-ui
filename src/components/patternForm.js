import React, { useState } from "react"
import { addPattern, test } from "../api/pattern"
import { useFormik } from "formik"

import {
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
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react"

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  function validate(values) {
    const errors = {}
    if (!values.name) {
      errors.name = "Required"
    }

    if (!values.imageURL) {
      errors.imageURL = "Required"
    }
    // if (!values.category) {
    //   errors.category = "Required"
    // }
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
      name: "",
      imageURL: "",
      category: "",
    },
    validate,
    onSubmit: async values => {
      setIsLoading(true)
      // make post request here
      // console.log(values)
      values.category = value
      // console.log(values)
      const addThatPattern = await addPattern(values) // post route
      if (addThatPattern.status === 200) {
        setIsLoading(false)
        toast({
          title: "Pattern saved!",
          description: "Another successful save :)",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        document.getElementById("name").value = ""
        document.getElementById("imageURL").value = ""
      }
    },
  })
  const toast = useToast()
  const [value, setValue] = React.useState("1")
  // TODO: change these vals to the categories needed
  const vals = [
    "First option",
    "Second option",
    "Third option",
    "Fourth option",
    "Fifth option",
    "Sixth option",
    "Seventh option",
    "Eight option",
  ]
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={0.5}>
      <GridItem rowSpan={1} colSpan={{ base: 12 }} bg={{ base: "white" }} p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="name">
              Name
            </FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <Text color="red.500">{errors.name}</Text>
            ) : null}
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="imageURL">
              Image URL:
            </FormLabel>
            <Input
              id="imageURL"
              type="text"
              name="imageURL"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.imageURL && errors.imageURL ? (
              <Text color="red.500">{errors.imageURL}</Text>
            ) : null}
          </FormControl>

          {/* <FormControl isRequired>
            <FormLabel mt={4} htmlFor="category">
              Category:
            </FormLabel>
            <Input
              id="category"
              type="text"
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.category && errors.category ? (
              <Text color="red.500">{errors.category}</Text>
            ) : null}
          </FormControl> */}

          <RadioGroup
            onChange={setValue}
            value={value}
            id="category"
            name="category"
          >
            <Stack spacing={5} direction="column">
              {vals.map(val => {
                return (
                  <Radio isRequired colorScheme="teal" key={val} value={val}>
                    {val}
                  </Radio>
                )
              })}
            </Stack>
          </RadioGroup>

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
    </Grid>
  )
}

export default ContactForm
