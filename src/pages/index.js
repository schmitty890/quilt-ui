import React from "react"
import PatternForm from "../components/patternForm"
import ListPatterns from "../components/listPatterns"
import { PatternProvider } from "../contexts/patternContext"

export default function Home() {
  return (
    <PatternProvider>
      <div>
        <PatternForm />
        <ListPatterns />
      </div>
    </PatternProvider>
  )
}
