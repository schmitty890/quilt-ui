import axios from "axios"
import categoryTypeIdData from "../data/categoryTypeIdData.json"

export const addPattern = async data => {
  // console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://quilt-api-hdi7d.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/pattern`, data)
      .then(res => {
        // console.log(res)
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

export const test = async () => {
  const dataObj = {
    data: "test",
  }
  return dataObj
}

export const getAllPatterns = async () => {
  console.log("get all patterns from backend")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://quilt-api-hdi7d.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/pattern`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error) // catches both errors
  }
}
