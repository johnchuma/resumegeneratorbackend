const {Router}  = require("express");
const { createSkill, deleteSkill } = require("./skill.controller");
const router = Router();
 router.post("/:uuid",createSkill)
 router.delete("/:uuid",deleteSkill)


module.exports = router