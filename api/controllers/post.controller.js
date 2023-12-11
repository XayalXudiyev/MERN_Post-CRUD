import PostModel from "../models/post.model.js";

export const getPost = async (req, res) => {
    try {
        const post = await PostModel.find()
        res.status(200).json(PostModel)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = new PostModel(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await PostModel.updateOne(id, req.body, { new: true });
        res.status(200).json(update);
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await PostModel.deleteOne({id:id});

        if (!deletedPost) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(200).json({ msg: 'DELETED' });
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
};



