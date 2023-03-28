const Comments = require('../models/Comments');
const comment = Comments;

const insertComment = (req) => {
    comment.insert(req.query)
    return 'Food added successfully';
}

const getComment =async (req) => {
    return await comment.get();
}
const deleteComment=(req)=>{
    return comment.delete(req.query.id)
  }

const getCommentByHighToLow = async (req) => {
    return await comment.get(`ORDER BY rating DESC`)
}
const getCommentByLowToHigh = async (req) => {
    return await comment.get(`ORDER BY rating ASC`)
}

module.exports = { insertComment, getComment,deleteComment,getCommentByHighToLow,getCommentByLowToHigh }