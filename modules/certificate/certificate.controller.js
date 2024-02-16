const {Resume,Certificate} = require("../../models")
const { errorResponse, successResponse } = require("../../utils/responses")

const createCertificate  = async(req,res)=>{
    try {
    
      const {certificate,year,institute} = req.body;
      const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        }
      })
      const response = await Certificate.create({
        resumeId:resume.id,
        certificate,year,institute
      })
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteCertificate  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const certificate = await Certificate.findOne({
        where:{
            uuid
        }
      })
      const response = await certificate.destroy()
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createCertificate,deleteCertificate}