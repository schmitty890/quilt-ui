import axios from "axios"

export const resetPasswordEmailSubmit = async data => {
  console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://quilt-api-hdi7d.ondigitalocean.app"

    console.log("log user in with data")

    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/reset-password`, data)
      .then(res => {
        console.log(res)
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
