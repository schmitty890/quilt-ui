import React, { Component } from "react"
import { test, getAllPatterns } from "../api/pattern"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class PatternProvider extends Component {
  state = {
    test: "ourTextExample",
    patterns: "",
    loading: true,
  }

  componentDidMount() {
    this.getData()
    this.getAllPatterns()
  }

  getData = async () => {
    const testHere = await test()
    console.log(testHere)
    this.setState({ test: testHere.data })
  }

  getAllPatterns = async () => {
    const allPatterns = await getAllPatterns()
    console.log(allPatterns)
    if (allPatterns) {
      this.setState({ patterns: allPatterns })
    }
    this.setState({ loading: false })
    console.log(this.state)
  }
  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
          patterns: this.state.patterns,
          loading: this.state.loading,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { PatternProvider, Consumer as PatternConsumer }
