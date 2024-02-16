const {Resume,Skill} = require("../../models")
const { errorResponse, successResponse } = require("../../utils/responses")

const createSkill  = async(req,res)=>{
    try {
    
      const {name} = req.body;
      const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        }
      })
      const response = await Skill.create({
        resumeId:resume.id,
        name
      })
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteSkill  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const skill = await Skill.findOne({
        where:{
            uuid
        }
      })
      const response = await skill.destroy()
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createSkill,deleteSkill}