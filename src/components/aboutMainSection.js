import React from "react"
import {
  Box,
  Text,
  Grid,
  GridItem,
  StaticImage,
  Image,
  Link,
  Button,
} from "@chakra-ui/react"

const AboutMainSection = () => {
  return (
    <Box border="1px solid red">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
        p={4}
      >
        <GridItem colSpan={{ base: 12, md: 6 }} bg="gray.50" p={4}>
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Image
                src="https://via.placeholder.com/300x300"
                alt="placeholder alt text"
                alignContent="center"
              />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Text fontSize="xl" fontWeight="bold">
                The Quilter
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 3 }} bg="gray.50" p={4}>
          <Text fontSize="xl">Patterns</Text>
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

      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
        p={4}
      >
        <GridItem colSpan={{ base: 12, md: 3 }} bg="gray.50" p={4}>
          <Text fontSize="xl">Patterns</Text>
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
        <GridItem colSpan={{ base: 12, md: 6 }} bg="gray.50" p={4}>
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Image
                src="https://via.placeholder.com/300x300"
                alt="placeholder alt text"
                alignContent="center"
              />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Text fontSize="xl" fontWeight="bold">
                The Quilter
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default AboutMainSection
