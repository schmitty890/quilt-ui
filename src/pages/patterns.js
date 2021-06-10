import React, { useState } from "react"
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Switch,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react"
// import PatternForm from "../components/patternForm"
import ListPatterns from "../components/listPatterns"
import FavoritePatterns from "../components/favoritePatterns"
import { PatternProvider, PatternConsumer } from "../contexts/patternContext"
import { useFormik } from "formik"
import getPatternByCategory from "../contexts/patternContext"
import NavTogglePatterns from "../components/navTogglePatterns"
import NavBar from "../components/navBar"
import Footer from "../components/footer"

export default function Patterns() {
  return (
    <PatternProvider>
      <PatternConsumer>
        {({ toggleMoreData }) => (
          <Box>
            <NavBar />
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
                  colorScheme="teal"
                  name="canEdit"
                  onChange={toggleMoreData}
                  defaultChecked
                />
              </FormControl>

              <NavTogglePatterns />
            </Box>
            <Box>
              {/* <PatternForm /> */}
              <ListPatterns />
            </Box>
            <Footer />
          </Box>
        )}
      </PatternConsumer>
    </PatternProvider>
  )
}
