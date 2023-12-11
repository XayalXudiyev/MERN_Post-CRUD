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
        const newPost = new PostModel.create(req.body)
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}


export const updatePost = async (req, res) => {
    try {
        const { id } = req.params

        const update = await PostModel.findByIdAndUpdate(id, req.body, { new: true })
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}



export const deletePost = async (req, res) => {
    try {
        const { id } = req.params

        await PostModel.findByIdAndRemove(id)
        res.status(409).json({ msg: 'DELETED' })

    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}



