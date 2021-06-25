import React from "react"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import ResetPasswordRequestForm from "../components/resetPasswordRequestForm"

import { Box } from "@chakra-ui/react"

export default function NewPasswordRequest() {
  return (
    <Box>
      <NavBar />
      <ResetPasswordRequestForm />
      <Footer />
    </Box>
  )
}
