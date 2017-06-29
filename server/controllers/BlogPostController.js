/**
 * responsible to handle all request to /posts and send back an response
 */

import BlogPost from '../models/BlogPost';
import { DECRESCENT_ORDER, MAX_ITEM_PER_PAGE } from '../util';

const BlogPostController = {

  createPost(req, res) {
    const blogPost = new BlogPost(req.body);
    
    blogPost.save()
      .then(newPost => res.status(201).json(newPost));
  },

  listAllPosts(req, res) {
    const { page = 0 } = req.query;
    const counterAll = BlogPost.count({});
    const offset = page * MAX_ITEM_PER_PAGE;
    
    const getFiveBlogPosts = BlogPost.find({})
      .sort({createdAt: DECRESCENT_ORDER })
      .skip(offset)
      .limit(MAX_ITEM_PER_PAGE);
    

    Promise.all([getFiveBlogPosts, counterAll])
      .then(result => 
        (res.status(200)
            .json({
              all: result[0],
              count: result[1]
            })
        )
      )
    
  }
}

export default BlogPostController;