import React, { Component } from "react"
import { test, getPatternById } from "../api/pattern"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class FavoritePatternProvider extends Component {
  state = {
    test: "ourTextExample",
    patterns: [],
    loading: true,
  }

  componentDidMount() {
    this.getData()
    this.getFavoritePatterns()
  }

  getData = async () => {
    const testHere = await test()
    console.log(testHere)
    this.setState({ test: testHere.data })
  }

  addToFavoritePatterns = async pattern => {
    console.log("addToFavoritePatterns")
    console.log(pattern)

    SaveDataToLocalStorage(pattern)

    function SaveDataToLocalStorage(data) {
      var a = []
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem("patterns")) || []
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(data)
      // Alert the array value
      alert(a) // Should be something like [Object array]
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem("patterns", JSON.stringify(a))
    }

    let toastMessage = {}
    // if pattern is already saved in favorite state, don't save it and return already favorited message
    // make request by id to add to patterns here
    // const newFavoritePattern = await getPatternById(pattern)
    // console.log(newFavoritePattern)
    // this.setState(prevState => ({
    //   patterns: [...prevState.patterns, pattern],
    // }))

    setTimeout(() => {
      console.log(this.state.patterns)
    }, 1000)

    toastMessage = { msg: "Pattern favorited", status: "success" }

    return toastMessage
  }

  getFavoritePatterns = async () => {
    console.log("get favorites out of local storage?")
    let favs = JSON.parse(localStorage.getItem("patterns"))
    console.log(favs)

    const promises = []

    console.log(typeof favs)
    favs.map(async fav => {
      const favPattern = await getPatternById(fav)
      console.log(favPattern)
      // favsToSaveToState.push(favPattern)
      this.setState(prevState => ({
        patterns: [...prevState.patterns, favPattern],
      }))
    })

    // setTimeout(() => {
    this.setState({ loading: false })
    console.log(this.state)
    // }, 2000)

    // // START EXAMPLE
    // const timeOut = t => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(`Completed in ${t}`)
    //     }, t)
    //   })
    // }

    // const durations = [1000, 2000, 3000]

    // const promises = []

    // durations.map(duration => {
    //   // In the below line, two things happen.
    //   // 1. We are calling the async function (timeout()). So at this point the async function has started and enters the 'pending' state.
    //   // 2. We are pushing the pending promise to an array.
    //   promises.push(timeOut(duration))
    // })

    // console.log(promises) // [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]

    // // We are passing an array of pending promises to Promise.all
    // // Promise.all will wait till all the promises get resolves and then the same gets resolved.
    // Promise.all(promises).then(response => console.log(response))
    // // END EXAMPLE

    // if (favs === null) {
    //   favs = []
    // }
    // console.log(favs)
    // this.setState({ patterns: favs, loading: false })
    // setTimeout(() => {
    //   console.log(this.state)
    // }, 2000)
  }

  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
          patterns: this.state.patterns,
          addToFavoritePatterns: this.addToFavoritePatterns,
          loading: this.state.loading,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { FavoritePatternProvider, Consumer as FavoritePatternConsumer }
