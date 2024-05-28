const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

routes.get("/Experiments_list", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/Experiments_list.html"));
});

routes.get("/water_content",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/water_content.html"));
})

routes.get("/specific_gravity_coarse",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/specific_gravity_coarse.html"));
})

routes.get("/specific_gravity_fine",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/specific_gravity_fine.html"));
})

routes.get("/core_cutter_method",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/core_cutter_method.html"));
})

routes.get("/Constant_head",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/Constant_head.html"));
})

routes.get("/Varying_head",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/Varying_head.html"));
})

routes.get("/light_compaction",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/light_compaction.html"));
})

routes.get("/Heavy_compaction",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/Heavy_compaction.html"));
})

routes.get("/Sand_replacement",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/Sand replacement.html"));
})

routes.get("/Shrinkage_limit",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/shrinkage limit.html"));
})

routes.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/html/ErrorPage.html"));
})

module.exports = routes;