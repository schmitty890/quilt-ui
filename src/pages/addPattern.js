import React from "react"
import { Box, Text } from "@chakra-ui/react"
import PatternForm from "../components/patternForm"
import { PatternProvider } from "../contexts/patternContext"
import NavBar from "../components/navBar"
import Footer from "../components/footer"

export default function Home() {
  return (
    <PatternProvider>
      <NavBar />
      <Box p={8} border="1px" borderColor="gray.200">
        <Text fontSize="xl">Add Pattern Form</Text>
      </Box>
      <Box p={8} border="1px" borderColor="gray.200">
        <PatternForm />
      </Box>
      <Footer />
    </PatternProvider>
  )
}
