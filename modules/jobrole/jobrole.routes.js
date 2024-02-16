const {Router}  = require("express");
const { createJobRole, deleteJobRole } = require("./jobrole.controller");
const router = Router();
 router.post("/:uuid",createJobRole)
 router.delete("/:uuid",deleteJobRole)


module.exports = router