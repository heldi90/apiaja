module.exports = (app) => {
  const posts = require('../controllers/post.controller');
  const router = require('express').Router();
  const { runValidation, validationDaftar } = require('../../validation');

  router.get('/', posts.findAll);
  router.post('/', validationDaftar, runValidation, posts.create);
  router.get('/:id', posts.findOne);
  router.put('/:id', validationDaftar, runValidation, posts.update);
  router.delete('/:id', posts.delete);

  app.use('/api/posts', router);
};
