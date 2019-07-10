export const validate = v =>
  !(v.name.length > 2 && v.email.length > 2 && v.value !== "");
export const upperCase = s => s && s.toUpperCase();

export const clone = v => {
  if (v) {
    try {
      return JSON.parse(JSON.stringify(v));
    } catch (error) {
      throw new Error(error);
    }
  }
  return v;
};

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const formatErrors = ({ graphQLErrors, networkError }) => {
  let errors = [];
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      let formErrors = [];
      if (extensions && extensions.exception) {
        formErrors = extensions.exception.errors;
      }
      errors.push({ message, locations, path, formErrors });
    });
  }
  if (networkError) {
    errors.push({ message: "Network failed" });
  }
  return errors;
};
