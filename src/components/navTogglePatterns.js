import React from "react"
import { Stack, Radio, RadioGroup, Grid } from "@chakra-ui/react"

import { PatternConsumer } from "../contexts/patternContext"

export default function NavTogglePatterns() {
  const [value, setValue] = React.useState("1")
  const vals = [
    "all",
    "texture",
    "curls/swirls",
    "feathers",
    "floral/leaves",
    "stars",
    "juvenile",
    "seasonal",
  ]
  return (
    <PatternConsumer>
      {({ getPatternByCategory }) => (
        <form onChange={getPatternByCategory}>
          <RadioGroup
            onChange={setValue}
            value={value}
            id="category"
            name="category"
            alignItems="center"
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              display="flex"
              justifyContent="space-between"
            >
              <Grid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(10, 1fr)",
                }}
                border="1px"
                borderColor="gray.200"
              >
                {vals.map(val => {
                  return (
                    <Radio
                      isRequired
                      colorScheme="teal"
                      key={val}
                      value={val}
                      type="submit"
                    >
                      {val}
                    </Radio>
                  )
                })}
              </Grid>
            </Stack>
          </RadioGroup>
        </form>
      )}
    </PatternConsumer>
  )
}
