
import { Formik, Field, Form } from "formik";

function Contact(props) {
  
  
    return (
      <>
  <section className="contact" id="contact">
            <h1>Contact us</h1>
            <div className="contact__content">
                <div className="contact__form">
                <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
                <Form>
                  Name:
          <Field name="name" type="text" />
          Email:
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
        </Formik>

                </div>
            </div>
        </section>      
      </>
    )
  }
  
  export default Contact
  