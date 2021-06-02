import React from "react"
import { Formik, Field, Form } from "formik"
import ImageUpload from "./imageUpload"
import { addPattern, test } from "../api/pattern"

export default function PatternForm() {
  return (
    <div>
      <h1>Pattern Form</h1>
      <Formik
        initialValues={{
          name: "",
          imageURL: "",
          category: "",
        }}
        onSubmit={async values => {
          // await new Promise(r => setTimeout(r, 500))
          // alert(JSON.stringify(values, null, 2))
          console.log(values)
          // post api call values to server to store in db
          const addNewPattern = await addPattern(values)
          console.log(addNewPattern)
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Pattern name" />

          <label htmlFor="imageURL">Image/pdf</label>
          <Field id="imageURL" name="imageURL" />

          <label htmlFor="category">Category</label>
          <Field id="category" name="category" placeholder="category" />
          <button type="submit">Submit</button>
        </Form>
        {/* <div>
          <h3>React Image Preview & Upload Component</h3>
          <div id="mainApp"></div>
          <div className="centerText"></div>
          <ImageUpload />
        </div> */}
      </Formik>
    </div>
  )
}
