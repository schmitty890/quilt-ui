import React from "react"
import { Box, Text, Grid, GridItem } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={{ base: 12 }} bg="tomato">
          <Text fontSize="xl">global header here</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Header
