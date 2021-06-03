import React from "react"
import { Box, Text, Switch, FormControl, FormLabel } from "@chakra-ui/react"
import { PatternConsumer } from "../contexts/patternContext"

const ListPatterns = () => {
  return (
    <PatternConsumer>
      {({ test, loading, patterns, viewMoreData }) => (
        <Box p={8} border="1px" borderColor="gray.200">
          {loading ? (
            <div>loading</div>
          ) : (
            <div>
              {patterns.map(pattern => (
                <div key={pattern._id} style={{ border: "3px solid black" }}>
                  {viewMoreData ? (
                    <Box>
                      <h1>Name: {pattern.name}</h1>
                      <div>Category: {pattern.category}</div>
                    </Box>
                  ) : null}

                  <img src={pattern.imageURL} style={{ height: "200px" }} />
                </div>
              ))}
            </div>
          )}
        </Box>
      )}
    </PatternConsumer>
  )
}

export default ListPatterns
