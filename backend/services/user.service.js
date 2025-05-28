import userModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { hash, verify } from "../utils/jwt.js";
import isPasswordValid from "../utils/validators/passwordValidator.js";

const userService = {
  /**
   * Authenticates a user with the provided credentials.
   *
   * @async
   * @param {Object} userData - The user credentials.
   * @param {string} userData.username - The username of the user.
   * @param {string} userData.password - The password of the user.
   * @returns {Promise<string>} The generated access token if authentication is successful.
   * @throws {Error} If any required field is missing, credentials are invalid, or login fails.
   */
  async login(userData) {
    try {
      const { username, password } = userData;

      //verify if the both values were provided.
      if (!username || !password) {
        throw new Error("All fields are required");
      }

      const user = await userModel.getUserInfo(username);

      //verify if the user exists in the database
      if (!user) {
        throw new Error("Invalid credentials!");
      }

      //verify is the password matches the password attached to the username found.
      const passwordValidation = await comparePassword(password, user.password);

      if (!passwordValidation) {
        throw new Error("Invalid credentials!");
      }

      //If all validations were passed the id will be returned in the JWT Token.
      const accessToken = await hash({
        user_id: user.user_id,
      });

      return accessToken;
    } catch (error) {
      throw new Error(`Failed to login. Error: ${error.message}`);
    }
  },

  /**
   * Registers a new user with the provided user data.
   *
   * @async
   * @param {Object} userData - The user data for registration.
   * @param {string} userData.firstName - The user's first name.
   * @param {string} userData.lastName - The user's last name.
   * @param {string} userData.username - The user's username.
   * @param {string} userData.email - The user's email address.
   * @param {string} userData.password - The user's password.
   * @param {string} userData.passwordConfirm - The user's password confirmation.
   * @returns {Promise<Object>} A promise that resolves to an object containing a success message.
   * @throws {Error} Throws an error if registration fails or validation does not pass.
   */
  async register(userData) {
    try {
      const {
        firstName,
        lastName,
        username,
        email,
        password,
        passwordConfirm,
      } = userData;

      //checks if all fields have been filled in
      if (
        !firstName ||
        !lastName ||
        !username ||
        !email ||
        !password ||
        !passwordConfirm
      ) {
        throw new Error("All fields are required");
      }

      //Checks if the two passwords matches and if the password attends to some requirements
      const passwordValidation = isPasswordValid(password, passwordConfirm);

      //if the result of the password is false it will throw an error
      if (!passwordValidation.result) {
        throw new Error(passwordValidation.message);
      }

      //if the passwords attends to the requirements it will be hashed
      const hashedPassword = await hashPassword(password);

      //creates the user object that will be used to store the data in the database
      const newUser = {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      };

      await userModel.registerNewUser(newUser);

      return { message: "User registered successfully." };
    } catch (error) {
      throw new Error(`Failed to register. Error: ${error.message}`);
    }
  },

  /**
   * Checks the validity of a JWT token.
   *
   * @async
   * @param {string} token - The JWT token to be validated.
   * @throws {Error} If the token is not provided, invalid, or if an error occurs during validation.
   * @returns {Promise<void>}
   */
  async checkToken(token) {
    try {
      const clientToken = token;

      if (!clientToken) {
        throw new Error("Token not provided.");
      }

      const isTokenValid = await verify(clientToken, process.env.JWT_SECRET);

      if (!isTokenValid) {
        throw new Error("Token is not valid");
      }
    } catch (error) {
      throw new Error(`Failed while validanting. Error: ${error.message}`);
    }
  },
};

export default userService;
