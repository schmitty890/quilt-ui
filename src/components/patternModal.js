import React from "react"
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
} from "@chakra-ui/react"
import { ViewIcon } from "@chakra-ui/icons"
// import the favoritePatternContext
import {
  FavoritePatternProvider,
  FavoritePatternConsumer,
} from "../contexts/favoritePatternContext"

const PatternModal = ({
  showModalButtonText,
  modalHeader,
  patternId,
  patternImage,
  patternImageAlt,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
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
                    <Image
                      maxHeight={450}
                      src={patternImage}
                      alt={patternImageAlt}
                    />
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
                    Add to favorites
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

export default PatternModal
