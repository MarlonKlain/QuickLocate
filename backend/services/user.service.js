import userModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { hash, verify } from "../utils/jwt.js";
import isPasswordValid from "../utils/validators/passwordValidator.js";

const userService = {
  async login(userData) {
    try {
      const { username, password } = userData;

      if (!username || !password) {
        throw new Error("All fields are required");
      }

      const user = await userModel.getUserInfo(username);

      if (!user) {
        throw new Error("Invalid credentials!");
      }

      const passwordValidation = await comparePassword(password, user.password);

      if (!passwordValidation) {
        throw new Error("Invalid credentials!");
      }

      const accessToken = await hash({
        user_id: user.user_id,
      });

      return accessToken;
    } catch (error) {
      throw new Error(`Failed to login. Error: ${error.message}`);
    }
  },

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

      const passwordValidation = isPasswordValid(password, passwordConfirm);

      if (!passwordValidation.result) {
        throw new Error(passwordValidation.message);
      }
      const hashedPassword = await hashPassword(password);

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
