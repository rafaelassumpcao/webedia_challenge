/*
* this is only for support the view  so will not focus in a real NoSQL document design
*  like subdocuments to show comments from an blog post 
*  even if this concept can fit into logic application
*/

import mongoose, { Schema } from 'mongoose';
const BlogPostSchema = new Schema({
  header: { type: String, required: [true, 'Header title is required']},
  subHeader: { type: String, required: [true, ' Header subtitle is required'] },
  title: { type: String, required: [true, 'Main title is required'] },
  description: { type: String, required: [true, 'Main subtitle is required'] },
  imageLink: { type: String, default: 'http://www.metodistaparanoa.org.br/img/celulasemimagem.jpg'},
  createdAt: { type: Date, default: new Date() }
});

const BlogPost = mongoose.model('blogposts', BlogPostSchema);

export default BlogPost;