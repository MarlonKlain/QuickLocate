import database from "../database/neon.js";

const userModel = {
  /**
   * Retrieves user information from the database based on the provided username.
   *
   * @async
   * @param {string} username - The username of the user to retrieve.
   * @returns {Promise<{username: string, password: string, id: number} | null>}
   *   An object containing the user's username, password, and id if found, otherwise null.
   * @throws {Error} If there is an error fetching data from the database.
   */
  async getUserInfo(username) {
    try {
      const [user] = await database`
      SELECT username, user_password, user_id FROM users
      WHERE username = ${username}
    `;

      if (!user) return null;

      return {
        username: user.username,
        password: user.user_password,
        id: user.user_id,
      };
    } catch (error) {
      throw new Error(
        `Failed to fetch data from the database. Error: ${error.message}`
      );
    }
  },

  /**
   * Registers a new user in the database.
   *
   * @async
   * @param {Object} user - The user information to register.
   * @param {string} user.firstName - The user's first name.
   * @param {string} user.lastName - The user's last name.
   * @param {string} user.username - The user's username.
   * @param {string} user.email - The user's email address.
   * @param {string} user.password - The user's hashed password.
   * @throws {Error} Throws an error if the registration fails.
   * @returns {Promise<void>}
   */
  async registerNewUser(user) {
    try {
      await database`
      INSERT INTO users(
      first_name,
      last_name,
      username,
      email,
      user_password
      )
      VALUES (
      ${user.firstName},
      ${user.lastName},
      ${user.username},
      ${user.email},
      ${user.password}
      )
      `;
    } catch (error) {
      throw new Error(
        `Failed to register data into the database. Error: ${error.message}`
      );
    }
  },
};

export default userModel;
