import React from "react"
import Patterns from "./patterns"
import Header from "../components/header"
import CarouselOfQuilts from "../components/carousel"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "../components/navBar"
import Footer from "../components/footer"

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
        <GridItem colSpan={{ base: 12 }} bg="white">
          <NavBar />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} mt={4}>
        <GridItem colSpan={{ base: 12, md: 6 }} bg="gray.50">
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <StaticImage
                src="../images/test.jpeg"
                alt="A dinosaur"
                placeholder="blurred"
                // height={200}
                // style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "contain" }}
                loading="eager"
              />
              {/* <Image
                src="https://via.placeholder.com/300x300"
                alt="placeholder alt text"
                alignContent="center"
              /> */}
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

        <GridItem colSpan={{ base: 12, md: 3 }} bg="gray.50" p={4}>
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
        <GridItem colSpan={{ base: 12, md: 3 }} bg="gray.50" p={4}>
          <Text fontSize="xl">Threads</Text>
          <Text fontSize="md">Over 350+ patterns in my collection!</Text>
          <Link
            href="#"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button colorScheme="purple" variant="solid">
              View threads
            </Button>
          </Link>
        </GridItem>
      </Grid>
      <CarouselOfQuilts />
      <Footer />
    </Box>
  )
}
