import React from "react"
import { PatternConsumer } from "../contexts/patternContext"

const ListPatterns = () => {
  return (
    <PatternConsumer>
      {({ test, loading, patterns }) => (
        <div>
          <div>{test}</div>
          <div>new test</div>
          <div>{loading}</div>
          {loading ? (
            <div>loading</div>
          ) : (
            <div>
              {patterns.map(pattern => (
                <div key={pattern._id} style={{ border: "3px solid black" }}>
                  <h1>Name: {pattern.name}</h1>
                  <div>Category: {pattern.category}</div>
                  <img src={pattern.imageURL} style={{ height: "200px" }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </PatternConsumer>
  )
}

export default ListPatterns
