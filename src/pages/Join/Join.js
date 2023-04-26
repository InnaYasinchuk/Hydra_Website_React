import React from "react";
import { Formik, Form, Field } from "formik";
import validateForm from "./formValidation.js";

import "./Join.scss";
import { JoinDesktop, JoinMobile } from "./svg";

const Join = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="join">
      {isMobile ? (
        <svg className="join-mobile-vector">
          <JoinMobile />
        </svg>
      ) : (
        <svg className="join-desktop-vector">
          <JoinDesktop />
        </svg>
      )}
      <h1 className="join__title">JOIN HYDRA</h1>
      <h2 className="join__subtitle">Let's Build Your VR Experience</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          about: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="join__form">
            <Field 
              name="firstName"
              validate={validateForm().validateFirstName}
              // placeholder={errors.firstName && touched.firstName ? errors.firstName : "First Name"}
              placeholder="First Name"
              className={errors.firstName && touched.firstName ? "invalid" : "join__form__input"}
            />
            
           
            <Field
              name="lastName"
              validate={validateForm().validateLastName}
              placeholder="Last Name"
              className={errors.lastName && touched.lastName ? "invalid" : "join__form__input"}
            />
            <Field
              name="email"
              validate={validateForm().validateEmail}
              placeholder="Email"
              className={errors.email && touched.email ? "invalid" : "join__form__input"}
            />
            <Field
              name="phone"
              validate={validateForm().validatePhone}
              placeholder="Phone Number"
              className={errors.phone && touched.phone ? "invalid" : "join__form__input"}
            />
            <Field
              name="subject"
              validate={validateForm().validateSubject}
              placeholder="Subject"
              className={errors.subject && touched.subject ? "invalid_subject" : "join__form__input_subject"}
            />
            <Field as="textarea"
              name="about"
              validate={validateForm().validateAbout}
              placeholder="Tell Us Something..."
              className={errors.about && touched.about ? "invalid_area" : "join__form__input_area"}
            />
            <button type="submit" className="join__form__button">
              SEND TO HYDRA
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Join;
