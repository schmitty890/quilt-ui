import axios from "axios"
export const signUp = async data => {
  // console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://quiltersara.netlify.app"
    // post data to a url endpoint
    const response = await axios.post(`${baseURL}/auth/register`, data)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
