import React from "react";

function useRegisterValidation(
  initialState: Object,
  validate: Function
): Object {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        console.log("authenticated", values);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  const handleChange = (event: Object) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (event: Object) => {
    event.preventDefault();
    const validationErrors = validate(values);

    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  };
}

export default useRegisterValidation;
