import React from "react"
import { Box, Text } from "@chakra-ui/react"
// import PatternForm from "../components/patternForm"
import ListPatterns from "../components/listPatterns"
import { PatternProvider } from "../contexts/patternContext"

export default function Home() {
  return (
    <PatternProvider>
      <Box p={8} border="1px" borderColor="gray.200">
        <Text fontSize="xl">Welcome to Quilter Sara's Patterns</Text>
      </Box>
      <Box p={8} border="1px" borderColor="gray.200">
        {/* <PatternForm /> */}
        <ListPatterns />
      </Box>
    </PatternProvider>
  )
}
