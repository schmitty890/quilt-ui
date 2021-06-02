import React from "react"
import { PatternConsumer } from "../contexts/patternContext"

const ListPatterns = () => {
  return <PatternConsumer>{({ test }) => <div>{test}</div>}</PatternConsumer>
}

export default ListPatterns
