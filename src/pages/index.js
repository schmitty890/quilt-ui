import React from "react"
import ReactDOM from "react-dom"
import { Formik, Field, Form } from "formik"
import axios from "axios"
import { signUp } from "../api/signup"

export default function Home() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500))
          // alert(JSON.stringify(values, null, 2))
          console.log(values)
          const postSignup = await signUp(values)
          console.log(postSignup)
          console.log("we signed up?")
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <label htmlFor="password">password</label>
          <Field id="password" name="password" placeholder="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
