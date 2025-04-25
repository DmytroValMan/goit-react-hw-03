import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor={phoneFieldId}>
              Number
            </label>
            <Field
              className={css.input}
              type="tel"
              name="number"
              id={phoneFieldId}
            />
            <ErrorMessage
              className={css.errorMsg}
              name="number"
              component="span"
            />
          </div>
          <div className={css.btnWrapper}>
            <button className={css.btn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
