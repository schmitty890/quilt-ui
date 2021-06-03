import React from "react"
import {
  Box,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Badge,
} from "@chakra-ui/react"
import { PatternConsumer } from "../contexts/patternContext"

const ListPatterns = () => {
  return (
    <PatternConsumer>
      {({ test, loading, patterns, viewMoreData }) => (
        <Box p={8} border="1px" borderColor="gray.200">
          {loading ? (
            <div>loading</div>
          ) : (
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
                  <Image src={pattern.imageURL} alt="test alt" />

                  <Box p="6">
                    {viewMoreData ? (
                      <Box d="flex" alignItems="baseline">
                        <Badge px="2" colorScheme="teal">
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
                  </Box>
                </Box>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </PatternConsumer>
  )
}

export default ListPatterns
