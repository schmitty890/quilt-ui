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
    let toastMessage = {}
    SaveDataToLocalStorage(pattern)

    function SaveDataToLocalStorage(data) {
      var a = []
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem("patterns")) || []

      if (!a.includes(data)) {
        // Push the new data (whether it be an object or anything else) onto the array
        a.push(data)
        toastMessage = { msg: "Pattern favorited", status: "success" }

        // Alert the array value
        // alert(a) // Should be something like [Object array]
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem("patterns", JSON.stringify(a))
      } else {
        toastMessage = {
          msg: "Pattern has already been favorited",
          status: "info",
        }
      }
    }

    // if pattern is already saved in favorite state, don't save it and return already favorited message
    // make request by id to add to patterns here
    // const newFavoritePattern = await getPatternById(pattern)
    // console.log(newFavoritePattern)
    // this.setState(prevState => ({
    //   patterns: [...prevState.patterns, pattern],
    // }))

    return toastMessage
  }

  removeFromFavoritePatterns = async id => {
    console.log("removeFromFavoritePatterns")
    let favs = JSON.parse(localStorage.getItem("patterns"))
    console.log(favs)
    console.log(id)
    let toastMessage = {}
    if (favs.includes(id)) {
      favs = favs.filter(e => e !== id)
      localStorage.setItem("patterns", JSON.stringify(favs))

      toastMessage = {
        msg: "Pattern removed from favorites",
        status: "success",
      }
    } else {
      toastMessage = {
        msg: "Pattern was already removed... refresh your page",
        status: "info",
      }
    }

    return toastMessage
  }

  getFavoritePatterns = async () => {
    console.log("get favorites out of local storage?")
    this.setState({ loading: true })
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
    // }, 1000)

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
          removeFromFavoritePatterns: this.removeFromFavoritePatterns,
          loading: this.state.loading,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { FavoritePatternProvider, Consumer as FavoritePatternConsumer }
