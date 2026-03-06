import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel:{
        type : String,
        requires : true,
        enum : ['Tweet' , 'Comment']
    },
    likeable:{
        type: mongoose.Schema.Types.ObjectId,
        refPath : 'onModel',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},{timestamps:true});

const Like = mongoose.model('Like',likeSchema);

export default Like;