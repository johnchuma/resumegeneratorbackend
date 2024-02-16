const {Router}  = require("express");
const { createCertificate, deleteCertificate } = require("./certificate.controller");
const router = Router();
 router.post("/:uuid",createCertificate)
 router.delete("/:uuid",deleteCertificate)


module.exports = router