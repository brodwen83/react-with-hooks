import "../styles/forms-styles.css";

import React from "react";
import useRegisterValidation from "./utils/useRegisterValidation";
import validateAuth from "./utils/validateAuth";

const INITIAL_STATE = {
  email: "",
  password: ""
};

function RegisterForm() {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useRegisterValidation(INITIAL_STATE, validateAuth);

  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={errors.email && "error-input"}
          type="email"
          placeholder="enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          className={errors.password && "error-input"}
          type="password"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
