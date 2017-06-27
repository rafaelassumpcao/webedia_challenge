import express from 'express';

import BlogPostController from '../controllers/BlogPostController';

const routes = express.Router();

//Examination Board  Routes
routes.post('/posts', BlogPostController.createPost);

routes.get('/posts', BlogPostController.listAllPosts);

export default routes;