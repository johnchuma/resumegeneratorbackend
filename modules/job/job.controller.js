const {Resume,Job} = require("../../models")
const { errorResponse, successResponse } = require("../../utils/responses")

const createJob  = async(req,res)=>{
    try {
    
      const {position,company,from,to,location} = req.body;
      const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        }
      })
      const response = await Job.create({
        resumeId:resume.id,
        position,company,from,to,location
      })
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteJob  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const job = await Job.findOne({
        where:{
            uuid
        }
      })
      const response = await job.destroy()
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createJob,deleteJob}