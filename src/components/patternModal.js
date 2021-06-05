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
  Lorem,
  useDisclosure,
  Image,
  useToast,
} from "@chakra-ui/react"
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
            <Button colorScheme="pink" size="xs" onClick={onOpen}>
              {showModalButtonText}
            </Button>
            <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Image src={patternImage} alt={patternImageAlt} />
                </ModalBody>

                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="teal"
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
