const {Resume,JobRole,Job} = require("../../models")
const { errorResponse, successResponse } = require("../../utils/responses")

const createJobRole  = async(req,res)=>{
    try {
    
      const {role} = req.body;
      const uuid = req.params.uuid
      const job = await Job.findOne({
        where:{
            uuid
        }
      })
      const response = await JobRole.create({
        jobId:job.id,
        role
      })
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteJobRole  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const jobRole = await JobRole.findOne({
        where:{
            uuid
        }
      })
      const response = await jobRole.destroy()
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createJobRole,deleteJobRole}