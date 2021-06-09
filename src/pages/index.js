import React from "react"
import Patterns from "./patterns"
import Header from "../components/header"
import CarouselOfQuilts from "../components/carousel"

import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
  Link,
} from "@chakra-ui/react"

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
            <GridItem colSpan={{ base: 12, md: 6 }} p={4}>
              <Text fontSize="xl">quilt title</Text>
              <Text fontSize="lg">info about quilt</Text>
              <Text fontSize="md">pattern used</Text>
              <Text fontSize="sm">other info</Text>
              <Text fontSize="xs">small text</Text>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 3 }} bg="papayawhip" p={4}>
          <Text fontSize="xl">Patterns</Text>
          <Text fontSize="md">Over 100+ patterns in my collection!</Text>
          <Link
            href="/patterns"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button colorScheme="purple" variant="solid">
              View patterns
            </Button>
          </Link>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }} bg="tomato">
          <Text fontSize="xl">more other info</Text>
        </GridItem>
      </Grid>
      <CarouselOfQuilts />
    </Box>
  )
}
