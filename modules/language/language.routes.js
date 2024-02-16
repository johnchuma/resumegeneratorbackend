const {Router}  = require("express");
const { createLanguage, deleteLanguage } = require("./language.controller");
const router = Router();
 router.post("/:uuid",createLanguage)
 router.delete("/:uuid",deleteLanguage)


module.exports = router