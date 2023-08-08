import * as mongoose from 'mongoose'

const NewsSchema = new mongoose.Schema({
    hat: {type:String},
    title: {type:String},
    text: {type:String},
    author: {type:String},
    img: {type:String},
    publishDate: {type:Date},
    active: {type:Boolean},
    link: {type:String},
    
});

export default NewsSchema