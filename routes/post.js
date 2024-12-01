import { post } from "../models/post.model.js";  // Correct import
import { user } from "../models/user.model.js";  // Correct import
import express from 'express';

const router = express.Router();

// Post route - Creates a new post
router.post('/posts', async (req, res) => {
  try {
    const { username, caption, images } = req.body;

    // Check if username, caption, and images are provided in the request body
    if (!username || !caption || !images) {
      return res.status(400).json({
        message: "Please check if caption or image is missing!"
      });
    }

    // Validate if the user exists
    const existingUser= await user.findOne({ $or: [{ username }] });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Create a new post with the provided data and associate it with the user's _id
    const newPost = await post.create({
      caption, 
      images, 
      userId: existingUser._id // Add user reference here
    });

    // Respond with the created post data
    res.status(200).json({
      message: "Post created",
      data: newPost
    });
  } catch (error) {
    // Handle errors during post creation
    res.status(500).json({
      message: "Failed to create post",
      error: error.message
    });
  }
});

// Get posts route - Retrieves all posts
router.get('/posts', async (req, res) => {
  try {
    // Retrieve all posts from the database
    const postsList = await Post.find({});

    // Respond with the list of posts
    res.status(200).json({
      data: postsList
    });
  } catch (error) {
    // Handle errors while fetching posts
    res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message
    });
  }
});

export default router;
