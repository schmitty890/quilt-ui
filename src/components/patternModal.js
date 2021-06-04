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
} from "@chakra-ui/react"

const PatternModal = ({
  showModalButtonText,
  modalHeader,
  patternId,
  patternImage,
  patternImageAlt,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
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
              onClick={() => {
                alert("add to favorites here. id:" + patternId)
              }}
            >
              Add to favorites
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PatternModal
