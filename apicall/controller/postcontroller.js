const post=require('../models/postmodels')
const addpost=async(req, res)=>{
try {

    const {title,desc}=req.body

    if (!title || !desc || !req.file ) {
        return res.status(400).send({
            success : false,
            message : "all filed is required",
        })
    }
    
const users= await post.create({
    userid:req.user._id,
    title:title,
    desc:desc,
    image:req.file.path

})
return res.status(200).send({
    success : true,
    messsge:"user register sucessfully",
    users
})


} catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
}
}

const viewpost=async(req, res)=>{
    try {
    const users=await post.find({userid:req.user._id}).populate('userid')
    return res.status(200).send({
        success : true,
        messsge:"user  sucessfully fethch",
        users
    })

    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error
        })
    }
}

module.exports={
    addpost,viewpost
}