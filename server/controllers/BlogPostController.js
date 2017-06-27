import BlogPost from '../models/BlogPost';

const BlogPostController = {

  createPost(req, res) {
    const blogPost = new BlogPost(req.body);
    
    blogPost.save()
      .then(newPost => res.status(201).json(newPost));
  },

  listAllPosts(req, res) {
    BlogPost.find({})
      .then(exams => res.status(200).json(exams));
  }
}

export default BlogPostController;