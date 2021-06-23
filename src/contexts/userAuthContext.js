import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class UserAuthProvider extends Component {
  state = {
    test: "ourTextExample",
    userId: false,
    loading: true,
  }

  componentDidMount() {
    this.getUser()
    this.logState()
  }

  getUser = async () => {
    console.log(window.localStorage.getItem("_id"))
    if (window.localStorage.getItem("_id")) {
      this.setState({
        userId: window.localStorage.getItem("_id"),
        loading: false,
      })
    } else {
      console.log("do nothing")
      this.setState({ loading: false })
    }
    // window.localStorage.getItem("_id") ? this.setState({
    //       userId: JSON.parse(window.localStorage.getItem("_id")),
    //     })
    //   : {}
  }

  logState = () => {
    setTimeout(() => {
      console.log(this.state)
    }, 3000)
  }
  logout = () => {
    console.log("log user out clear local storage")
  }

  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
          userId: this.state.userId,
          logout: this.logout,
          loading: this.state.loading,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserAuthProvider, Consumer as UserAuthConsumer }
