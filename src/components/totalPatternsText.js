import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { PatternConsumer } from "../contexts/patternContext"

const TotalPatternsText = () => {
  return (
    <PatternConsumer>
      {({ patterns }) => (
        <Text>Total number of patterns: {patterns.length}</Text>
      )}
    </PatternConsumer>
  )
}

export default TotalPatternsText
