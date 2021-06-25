import axios from "axios"

export const submitNewPassword = async data => {
  console.log(data)
  console.log("WE ARE HERE")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://quilt-api-hdi7d.ondigitalocean.app"

    console.log("log user in with data")

    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/new-password`, data)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("_id", res.data._id)
        return res
      })
      .catch(error => {
        // console.log(error.response)
        return error.response
      })

    return response
  } catch (err) {
    // Error handling here
    console.log(err.message)
    console.log(err)
    return err.message
  }
}
