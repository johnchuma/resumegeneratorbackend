const {Resume,Language} = require("../../models")
const { errorResponse, successResponse } = require("../../utils/responses")

const createLanguage  = async(req,res)=>{
    try {
    
      const {language,level} = req.body;
      const uuid = req.params.uuid
      const resume = await Resume.findOne({
        where:{
            uuid
        }
      })
      const response = await Language.create({
        resumeId:resume.id,
        language,level
      })
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteLanguage  = async(req,res)=>{
    try {
    const uuid = req.params.uuid
      const language = await Language.findOne({
        where:{
            uuid
        }
      })
      const response = await language.destroy()
      successResponse(res,response);
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createLanguage,deleteLanguage}