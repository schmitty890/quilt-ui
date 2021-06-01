import React from "react"
import { Formik, Field, Form } from "formik"
import { signUp } from "../api/signup"

function validateEmail(value) {
  let error
  if (!value) {
    error = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address"
  }
  return error
}

export default function SignUp() {
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
          if (postSignup.status === 409) {
            console.log("email already exists in database")
          }
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Bob" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="bob@gmail.com"
              type="email"
              validate={validateEmail}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <label htmlFor="password">password</label>
            <Field id="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
