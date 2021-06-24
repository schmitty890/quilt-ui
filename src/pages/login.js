import React from "react"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import LoginForm from "../components/loginForm"

import { Box } from "@chakra-ui/react"

export default function Login() {
  return (
    <Box>
      <NavBar />
      <LoginForm />
      <Footer />
    </Box>
  )
}
