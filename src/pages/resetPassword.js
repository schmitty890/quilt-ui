import React from "react"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import ResetPasswordForm from "../components/resetPasswordForm"
import { Router as MyRouter } from "@reach/router"

import { Box } from "@chakra-ui/react"

export default function ResetPassword() {
  return (
    // <Box>
    //   <NavBar />
    <MyRouter>
      <ResetPasswordForm path="/resetPassword/:token" />
    </MyRouter>

    //   <Footer />
    // </Box>
  )
}
