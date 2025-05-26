import database from "../database/neon.js";

const userModel = {
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
