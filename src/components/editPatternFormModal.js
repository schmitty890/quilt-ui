import React, { useState } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  useDisclosure,
  Image,
  useToast,
  Text,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react"
import { ViewIcon } from "@chakra-ui/icons"
// import the favoritePatternContext
import {
  FavoritePatternProvider,
  FavoritePatternConsumer,
} from "../contexts/favoritePatternContext"
import { updatePatternById } from "../api/pattern"

import { useFormik } from "formik"

const EditPatternFormModal = ({
  showModalButtonText,
  modalHeader,
  patternId,
  patternImage,
  patternImageAlt,
  patternCategory,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  function validate(values) {
    const errors = {}
    // if (!values.name) {
    //   errors.name = "A Name is required"
    // }

    // if (values.imageURL) {
    //   var correctImageURL = values.imageURL.startsWith("https://i.imgur.com/")
    //   var endCorrectImageURL = values.imageURL.endsWith(".png")

    //   if (!correctImageURL || !endCorrectImageURL) {
    //     errors.imageURL = "Please, use the correct image URL"
    //   }
    // }

    // if (!values.imageURL) {
    //   errors.imageURL = "An image URL Required"
    // }
    // return errors
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
      const updatePattern = {
        id: patternId,
        name: document.getElementById("name").value,
        imageURL: document.getElementById("imageURL").value,
        category: Array.from(document.getElementsByName("category")).find(
          r => r.checked
        ).value,
      }
      console.log(updatePattern)
      const updateThatPattern = await updatePatternById(updatePattern) // post route
      console.log(updateThatPattern)
      // if (updateThatPattern.status === 200) {
      setIsLoading(false)
      toast({
        title: "Pattern updated!",
        description: "Page refreshing... :)",
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      setTimeout(() => {
        window.location.href = "/patterns"
      }, 5000)

      // }
    },
  })
  const [value, setValue] = React.useState("1")
  // TODO: change these vals to the categories needed
  const vals = [
    "texture",
    "curls-swirls",
    "feathers",
    "floral-leaves",
    "stars",
    "juvenile",
    "seasonal",
  ]

  return (
    <FavoritePatternProvider>
      <FavoritePatternConsumer>
        {({ addToFavoritePatterns }) => (
          <>
            <Button
              colorScheme="pink"
              variant="outline"
              leftIcon={<ViewIcon />}
              size="md"
              onClick={onOpen}
            >
              {showModalButtonText}
            </Button>
            <Modal
              isOpen={isOpen}
              size={"xl"}
              onClose={onClose}
              maxHeight={100}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
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
                          defaultValue={modalHeader}
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
                          defaultValue={patternImage}
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
                        defaultValue={patternCategory}
                        id="category"
                        name="category"
                      >
                        <Stack spacing={5} direction="column">
                          {vals.map(val => {
                            return (
                              <Radio
                                isRequired
                                colorScheme="teal"
                                key={val}
                                value={val}
                              >
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
                  </Center>
                </ModalBody>

                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={e =>
                      addToFavoritePatterns(patternId).then(res => {
                        console.log(res)
                        onClose()
                        toast({
                          title: `${res.msg}`,
                          status: res.status,
                          isClosable: true,
                          duration: 3000,
                        })
                      })
                    }
                  >
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
      </FavoritePatternConsumer>
    </FavoritePatternProvider>
  )
}

export default EditPatternFormModal
