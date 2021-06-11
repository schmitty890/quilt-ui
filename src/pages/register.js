import React from "react"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import SignUp from "../components/signUp"

import { Box } from "@chakra-ui/react"

export default function Register() {
  return (
    <Box>
      <NavBar />
      <SignUp />
      <Footer />
    </Box>
  )
}
