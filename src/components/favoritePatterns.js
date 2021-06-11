import React from "react"
import {
  Box,
  Grid,
  Image,
  Spinner,
  Center,
  Badge,
  useDisclosure,
} from "@chakra-ui/react"
import {
  FavoritePatternConsumer,
  FavoritePatternProvider,
} from "../contexts/favoritePatternContext"
import RemovePatternModal from "../components/removePatternModal"

const FavoritePatterns = () => {
  return (
    <FavoritePatternProvider>
      <FavoritePatternConsumer>
        {({ patterns, loading }) => (
          <Box p={8} border="1px" borderColor="gray.200">
            {loading ? (
              <Center>
                <Spinner color="purple.600" />
                <div>&nbsp; &nbsp; loading favorite patterns</div>
              </Center>
            ) : (
              <Box>
                Favorites
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
                      <Image src={pattern.imageURL} alt={pattern.name} />

                      <Box p="6">
                        <Box d="flex" alignItems="baseline">
                          <Badge
                            px="2"
                            colorScheme={pattern.colorScheme}
                            variant={pattern.variant}
                          >
                            {pattern.category}
                          </Badge>
                        </Box>

                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated
                        >
                          {pattern.name}
                        </Box>
                        <RemovePatternModal
                          showModalButtonText="View pattern"
                          modalHeader={pattern.name}
                          patternId={pattern._id}
                          patternImage={pattern.imageURL}
                          patternImageAlt={pattern.name}
                        />
                      </Box>
                    </Box>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        )}
      </FavoritePatternConsumer>
    </FavoritePatternProvider>
  )
}

export default FavoritePatterns
