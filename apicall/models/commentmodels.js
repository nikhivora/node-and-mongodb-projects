const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
       ref:'api'
    },
    postid:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'postusers'
    },
    comment:{
        type:String,
        require:true
    }
})
const Comment=mongoose.model('Comment',userschema)
module.exports=Comment