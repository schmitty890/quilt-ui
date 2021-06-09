import React from "react"
import Patterns from "./patterns"
import Header from "../components/header"

import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react"

export default function Home() {
  return (
    <Box p={8}>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12 }} bg="tomato">
          <Text fontSize="xl">Header text/logo here</Text>
          <Image
            src="https://via.placeholder.com/100"
            boxSize="100px"
            alt="placeholder alt text"
          />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} mt={4}>
        <GridItem colSpan={{ base: 12 }}>
          <Text fontSize="xl">
            cool picture of longarm or quilt or something
          </Text>
          <Image
            src="https://via.placeholder.com/800x200"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6 }} bg="papayawhip">
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Image
                src="https://via.placeholder.com/300x300"
                alt="placeholder alt text"
                alignContent="center"
              />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Text fontSize="xl">quilt title</Text>
              <Text fontSize="lg">info about quilt</Text>
              <Text fontSize="md">pattern used</Text>
              <Text fontSize="sm">other info</Text>
              <Text fontSize="xs">small text</Text>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 3 }} bg="papayawhip">
          <Text fontSize="xl">other info</Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }} bg="tomato">
          <Text fontSize="xl">more other info</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}
