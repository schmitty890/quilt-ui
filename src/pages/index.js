import React from "react"
import CarouselOfQuilts from "../components/carousel"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import TotalPatternsText from "../components/totalPatternsText"

import { Box, Text, Grid, GridItem, Button, Link } from "@chakra-ui/react"
import { PatternProvider } from "../contexts/patternContext"

export default function Home() {
  return (
    <PatternProvider>
      <Box>
        <NavBar />
        <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4}>
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
            <TotalPatternsText />
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
    </PatternProvider>
  )
}
