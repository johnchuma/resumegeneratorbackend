const {Resume,Job,Language,Skill,Certificate,JobRole} = require("../../models")
const { errorResponse, successResponse } = require("../../utils/responses")

const createResume  = async(req,res)=>{
    try {
      const response = await Resume.create({})
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}
const getResume  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        },
        include:[{
          model:Job,
          include:[JobRole]
        },Language,Skill,Certificate]
      })
      successResponse(res,resume);
    } catch (error) {
        errorResponse(res,error)
    }
}
const updateResume  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        }
      })
      const response = await resume.update(req.body)
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteResume  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        }
      })
      const response = await resume.destroy()
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {getResume,createResume,updateResume,deleteResume}