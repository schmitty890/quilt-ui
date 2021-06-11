import React from "react"
import {
  Box,
  Grid,
  Image,
  Center,
  Badge,
  useDisclosure,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { PatternConsumer } from "../contexts/patternContext"
import {
  FavoritePatternConsumer,
  FavoritePatternProvider,
} from "../contexts/favoritePatternContext"

// import { PatternConsumer } from "../contexts/patternContext"
import PatternModal from "./patternModal"

const ListPatterns = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  return (
    <PatternConsumer>
      {({ test, loading, patterns, viewMoreData }) => (
        <Box p={8} border="1px" borderColor="gray.200">
          {loading ? (
            <Center>
              <Spinner color="purple.600" />
              <div>&nbsp; &nbsp; loading patterns</div>
            </Center>
          ) : (
            <Box>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(5, 1fr)",
                }}
                gap={4}
              >
                {patterns.map(pattern => (
                  <Box
                    key={pattern._id}
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Image
                      src={pattern.imageURL}
                      fallbackSrc="https://via.placeholder.com/500"
                      placeholder="blurred"
                      alt={pattern.name}
                    />

                    <Box p="6">
                      {viewMoreData ? (
                        <Box d="flex" alignItems="baseline">
                          <Badge
                            px="2"
                            colorScheme={pattern.colorScheme}
                            variant={pattern.variant}
                          >
                            {pattern.category}
                          </Badge>
                        </Box>
                      ) : null}

                      {viewMoreData ? (
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated
                        >
                          {pattern.name}
                        </Box>
                      ) : null}
                      <PatternModal
                        showModalButtonText="View pattern"
                        modalHeader={pattern.name}
                        patternId={pattern._id}
                        patternImage={pattern.imageURL}
                        patternImageAlt={pattern.name}
                      />
                      <FavoritePatternProvider>
                        <FavoritePatternConsumer>
                          {({ addToFavoritePatterns }) => (
                            <Button
                              colorScheme="purple"
                              variant="outline"
                              leftIcon={<AddIcon />}
                              mt={4}
                              onClick={e =>
                                addToFavoritePatterns(pattern._id).then(res => {
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
                          )}
                        </FavoritePatternConsumer>
                      </FavoritePatternProvider>
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      )}
    </PatternConsumer>
  )
}

export default ListPatterns
