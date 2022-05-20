const Post = require('../models/Post')

module.exports = {
    Query: {
        async getPost() {
            try {
                const post = await Post.find();
                return post;
            }
            catch (err) {
                throw new Error(err);
            }
        }
    }
}