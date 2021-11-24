// eslint-disable-next-line no-unused-vars
const { check, validationResult } = require('express-validator');

// eslint-disable-next-line consistent-return
exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};

exports.validationDaftar = [
  check('username', 'username tidak boleh kosong').notEmpty(),
  check('password', 'password tidak boleh kosong')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password minimal 6 digit'),
];
