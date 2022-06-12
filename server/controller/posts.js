import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
import express from 'express';

const router = express.Router();

export const getPost = async(req,res) => {

    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
        
    } catch (error) {
             res.status(404).json({message: error.message});
        
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const upDatePost  = async(req,res) =>{
    const { id } = req.params;
    const post = req.body;

    if(mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no posts");
    await PostMessage.findByIdAndUpdate(id, upDatePost, { new: true });
     res.json(upDatePost);

}  
export const deletePost = async (req,res) => {
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("ID not found");
    await PostMessage.findByIdAndRemove(id);
    res.json({message : "post delted"})
}