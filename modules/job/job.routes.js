const {Router}  = require("express");
const { createJob, deleteJob } = require("./job.controller");
const router = Router();
 router.post("/:uuid",createJob)
 router.delete("/:uuid",deleteJob)


module.exports = router