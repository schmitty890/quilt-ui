import axios from "axios"
export const postEmailRoute = async data => {
  // console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://quilt-api-hdi7d.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.post(`${baseURL}/email`, data)
    console.log(response)
  } catch (error) {
    console.log(error) // catches both errors
  }
}
