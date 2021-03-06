const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const RecipePostSchema = new Schema({
    account: String,
    accountName: String,
    title: String,
    body: String,
    ingredients: String,
    instructions: String,
    imageData: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: new Date().toISOString().slice(0,10)
    }
});
exports.RecipePostSchema = RecipePostSchema;

// Model
const RecipePost = mongoose.model('RecipePost', RecipePostSchema);
exports.RecipePost = RecipePost;
