/**
 * Validates a password based on several criteria:
 * - If `passwordConfirm` is provided, checks if it matches `password`.
 * - Checks if the password is at least 8 characters long.
 * - Checks for at least one uppercase letter.
 * - Checks for at least one lowercase letter.
 * - Checks for at least one numeric digit.
 * - Checks for at least one special character from !@#$%^&*.
 *
 * @param {string} password - The password to validate.
 * @param {string} [passwordConfirm] - Optional. The password confirmation to compare with the password.
 * @returns {{ result: boolean, message: string }} An object containing the validation result and a message.
 */
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
