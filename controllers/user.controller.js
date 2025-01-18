const { body, validationResult } = require('express-validator');
const validateSignup = [
body('email', 'Email must not be empty').notEmpty(),
body('password', 'Password must not be empty').notEmpty(),
body('password', 'Password must be 6+ characters long').isLength({ min: 6 }),
body('repeatPassword', 'Repeat Password must not be empty').notEmpty(),
body('repeatPassword', 'Passwords do not match').custom((value, { req }) => (value ===
req.body.password)),
];
  res.render('user', { message: 'User Created', user: null });
  };
  const getUser = async (req, res) => {
  const user = await User.findOne({ email: 'nathan@mail.com' });
  res.render('user', { message: 'User Retrieved', user: user });
  };
  const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ email: 'nathan@mail.com' });
  res.render('user', { message: 'User Deleted', user: null });
  };
  module.exports = {
  getUser,
  createUser,
  deleteUser,
  };