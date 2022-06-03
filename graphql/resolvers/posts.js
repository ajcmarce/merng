const Post = require('../models/Post');
const checkAuth = require('../../util/check-auth');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const post = await Post.find();
                return post;
            }
            catch (err) {
                throw new Error(err);
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if (!post) {
                   throw new Error("Post not found");
                }
                return post
            } catch(err) {
                throw new Error(err);
            }
        }
        
    },
    Mutation: {
        async createPost(_, { body }, context) {
            const user = checkAuth(context)      
        }
    }
}