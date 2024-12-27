const post=require('../models/postmodels')
const commentmodels=require('../models/commentmodels')

 
const allPost=async(req, res)=>{


    const allpost=await post.find({}).populate('userid')

    return res.status(200).send({
        success:true,
        message:'view all post',
        allpost

    })
}


const allcommnet=async(req, res)=>{
    try {

        const allcommnet= await commentmodels.find({}).populate('userid').populate('postid')
        return res.status(200).send({
            success:true,
            message:'view all cpmmnet',
            allcommnet
    
        })

    } catch (error) {
        
    }
}
module.exports={
    allPost,allcommnet
}