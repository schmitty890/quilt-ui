import React, { Component } from "react"
import { test, getAllPatterns, getPatternByCategory } from "../api/pattern"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class PatternProvider extends Component {
  state = {
    test: "ourTextExample",
    patterns: "",
    loading: true,
    viewMoreData: true,
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

  getPatternByCategory = async category => {
    // console.log(category.nativeEvent.target.value)
    const categoryValue = category.nativeEvent.target.value
    let getPatternsByACategory
    if (categoryValue === "all") {
      this.getAllPatterns()
    } else {
      getPatternsByACategory = await getPatternByCategory(categoryValue)
    }

    // console.log(getPatternsByACategory)
    if (getPatternsByACategory) {
      this.setState({ patterns: getPatternsByACategory })
    }
    console.log(this.state)
  }

  toggleMoreData = value => {
    const isChecked = value.nativeEvent.target.checked
    // console.log(isChecked)
    this.setState({ viewMoreData: isChecked })
  }

  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
          patterns: this.state.patterns,
          loading: this.state.loading,
          toggleMoreData: this.toggleMoreData,
          viewMoreData: this.state.viewMoreData,
          getPatternByCategory: this.getPatternByCategory,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { PatternProvider, Consumer as PatternConsumer }
