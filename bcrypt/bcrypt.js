const bcrypt = require("bcrypt");

// password hashing function
const passwordHash = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash
  } catch (err) {
    console.log(err);
  }
  return null;
};

// password comparison function
const comparePasswords = async (password, hash) => {
    try {
      const matchFound = await bcrypt.compare(password, hash);
      return matchFound;
    } catch (err) {
      console.log(err);
    }
    return false;
  };