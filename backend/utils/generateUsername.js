import User from "../models/user.model.js";

const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
};

export const isUsernameTaken = async (username) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ username }],
    });
    return !!existingUser;
  } catch (error) {
    // console.error("Error checking username:", error.message);
    return { error: `Error checking username: ${error.message}` };
  }
};

const generateUsername = async (fullName) => {
  try {
    const [firstName] = fullName.split(" ");
    let username = "";
    let isTaken = true;
    while (isTaken) {
      username = firstName + generateRandomString(1);
      isTaken = await isUsernameTaken(username);
      if (isTaken.error) {
        return { error: isTaken.error };
      }
      if (isTaken) {
        username += generateRandomString(1);
      }
    }
    return username;
  } catch (error) {
    // console.error("Error generating username:", error);
    return { error: `Error generating username: ${error.message}` };
  }
};

export default generateUsername;
