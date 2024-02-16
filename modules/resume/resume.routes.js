const {Router}  = require("express");
const { createResume, updateResume, deleteResume, getResume } = require("./resume.controller");
const router = Router();
 router.post("/",createResume)
 router.get("/:uuid",getResume)
 router.patch("/:uuid",updateResume)
 router.delete("/:uuid",deleteResume)


module.exports = router