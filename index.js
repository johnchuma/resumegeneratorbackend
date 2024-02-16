const express = require('express')
const app = express();
const puppeteer = require('puppeteer');
const bodyParser = require("body-parser");
const CertificateRoutes = require("./modules/certificate/certificate.routes")
const ResumeRoutes = require("./modules/resume/resume.routes")
const JobRoutes = require("./modules/job/job.routes")
const JobRoleRoutes = require("./modules/jobrole/jobrole.routes")
const SkillRoutes = require("./modules/skill/skill.routes")
const LanguageRoutes = require("./modules/language/language.routes")

const cors = require('cors')
app.use(cors()); 
app.use(express.json());
app.use("/files",express.static("files"));
app.use(bodyParser.text({ type: "/" }));

app.use("/job",JobRoutes)
app.use("/skill",SkillRoutes)
app.use("/job-role",JobRoleRoutes)
app.use("/certificate",CertificateRoutes)
app.use("/language",LanguageRoutes)
app.use("/resume",ResumeRoutes)

// app.get("/resume",(req,res)=>{
//     res.send("Good")
// })
// app.post("/generatePdf",async(req,res)=>{
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.goto('http://localhost:3000/resume/uuisaf');
//         await page.pdf({ path: 'files/resume.pdf', printBackground:true, format: 'A4'});
//         await browser.close();
//         res.status(200).json({
//             status:true,
//             body:{
//                 link:"http://localhost:5000/files/resume.pdf"
//             }
//         })
//     } catch (error) {
//         res.status(500).send({
//             status:false,
//             error
//         })
//     }
// })




app.listen(5000,()=>{
  console.log("Server started at 5000")
})