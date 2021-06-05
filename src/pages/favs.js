import React from "react"
import { Box, Text } from "@chakra-ui/react"
import FavoritePatterns from "../components/favoritePatterns"

export default function Home() {
  return (
    <Box>
      <Box p={8} border="1px" borderColor="gray.200">
        <Text fontSize="xl">Favorite patterns</Text>
      </Box>
      <Box p={8} border="1px" borderColor="gray.200">
        <FavoritePatterns />
      </Box>
    </Box>
  )
}
