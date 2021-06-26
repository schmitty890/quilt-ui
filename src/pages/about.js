import React from "react"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import AboutMainSection from "../components/aboutMainSection.js"

import { Box } from "@chakra-ui/react"

export default function About() {
  return (
    <Box>
      <NavBar />
      <AboutMainSection />
      <Footer />
    </Box>
  )
}
