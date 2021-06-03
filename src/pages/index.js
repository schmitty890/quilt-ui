import React from "react"
import { Box, Text, FormControl, FormLabel, Switch } from "@chakra-ui/react"
// import PatternForm from "../components/patternForm"
import ListPatterns from "../components/listPatterns"
import { PatternProvider, PatternConsumer } from "../contexts/patternContext"

export default function Home() {
  return (
    <PatternProvider>
      <PatternConsumer>
        {({ toggleMoreData }) => (
          <Box>
            <Box
              p={8}
              border="1px"
              borderColor="gray.200"
              style={{
                position: "-webkit-sticky",
                /* Safari */ position: "sticky",
                top: "0",
                zIndex: 1,
                background: "white",
              }}
            >
              <Text fontSize="xl">Welcome to Quilter Sara's Patterns</Text>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                top={{ base: "0", md: "-7" }}
              >
                <FormLabel mb="0">Show more data?</FormLabel>
                <Switch
                  size="lg"
                  colorScheme="red"
                  name="canEdit"
                  onChange={toggleMoreData}
                  defaultChecked
                />
              </FormControl>
            </Box>
            <Box p={8} border="1px" borderColor="gray.200">
              {/* <PatternForm /> */}
              <ListPatterns />
            </Box>
          </Box>
        )}
      </PatternConsumer>
    </PatternProvider>
  )
}
