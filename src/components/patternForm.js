import React from "react"
import { Formik, Field, Form } from "formik"

export default function PatternForm() {
  return (
    <div>
      <h1>Pattern Form</h1>
      <Formik
        initialValues={{
          name: "",
          image: "",
          category: "",
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500))
          // alert(JSON.stringify(values, null, 2))
          console.log(values)
          // post api call values to server to store in db
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Pattern name" />

          <label htmlFor="image">Image/pdf</label>
          <Field id="image" name="image" />

          <label htmlFor="category">Category</label>
          <Field id="category" name="category" placeholder="category" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
