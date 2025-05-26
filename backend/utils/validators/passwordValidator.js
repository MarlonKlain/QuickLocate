function isPasswordValid(password, passwordConfirm) {
  if (passwordConfirm != undefined) {
    if (password != passwordConfirm) {
      return { result: false, message: "Passwords does not matches" };
    }
  }

  if (password.length < 8) {
    return {
      result: false,
      message: "Password must contain more than 8 characters",
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      result: false,
      message: "Password must contain an uppercase letter.",
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      result: false,
      message: "Password must contain a lowercase letter.",
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      result: false,
      message: "Password must contain a number.",
    };
  }

  if (!/[!@#$%^&*]/.test(password)) {
    return {
      result: false,
      message: "Password must include at least one special character.",
    };
  }

  return { result: true, message: "Password valid!" };
}

export default isPasswordValid;
