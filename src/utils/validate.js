export const checkValidData = (fullName, email, password) => {
  const isFullNameValid = fullName !== "" || null;
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(password);

  if (!isFullNameValid) return "FullName is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Email ID is not valid";

  return null;
};
