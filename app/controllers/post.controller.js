/* eslint-disable no-unused-vars */
const db = require('../models');

const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error cuy di find post nya',
      });
    });
};

exports.daftarUser = async (req, res) => {
  const { username, password } = req.body;

  const usernameUser = await Post.findOne({ username });

  if (usernameUser) {
    return res.status(404).json({
      status: false,
      message: 'Username sudah tersedia',
    });
  }

  const user = new Post({
    username,
    password,
    score: 0,
  });

  user.save();

  return res.status(201).json({
    message: 'User berhasil didaftarkan',
  });
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const usernameUser = await Post.findOne({ username });

  if (usernameUser.password === password) {
    return res.status(200).json({
      status: true,
      message: 'Anda Berhasil Log in',
    });
  }

  return res.status(404).json({
    message: 'Anda Belum terdaftar',
  });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  Post.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || 'Error cuy di findById post nya',
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: 'Post gk ada cuy',
        });
      }
      res.send({
        message: 'Post nya telah Update',
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || 'Error cuy di Updatenya post nya',
      });
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Post.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: 'Post gk ada cuy',
        });
      }
      res.send({
        message: 'Post nya telah di hapus',
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || 'Error cuy di deletnya post nya',
      });
    });
};
