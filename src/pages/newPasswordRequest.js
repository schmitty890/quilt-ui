import React from "react"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import ResetPasswordRequest from "../components/resetPasswordRequest"

import { Box } from "@chakra-ui/react"

export default function NewPasswordRequest() {
  return (
    <Box>
      <NavBar />
      <ResetPasswordRequest />
      <Footer />
    </Box>
  )
}
