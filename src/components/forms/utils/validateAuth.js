const validateAuth = (values: Object) => {
  let errors = {};

  // email  errors
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password errors
  if (!values.password) errors.password = "Password is required.";
  else if (values.password.length < 6)
    errors.password = "Password must be at least 6 characters";

  return errors;
};

export default validateAuth;
