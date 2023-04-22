const Employee = require("../models/employeeModel")
const jwt = require("jsonwebtoken");

//Get employees
exports.getEmployee = async (req,res)=>{
    try {
        const data =await Employee.find()
        res.send(data);
    } catch (err) {
        res.status(400).json({error:"No employee to display"})
    }
}

//add employee  --admin
exports.createEmployee = async(req,res) =>{

    jwt.verify(req.body.token,"UserToken",(err,decoded)=>{
        if(decoded && decoded.email){
            let data = new Employee({
                name: req.body.name,
                email:req.body.email,
                place:req.body.place,
                designation:req.body.designation,
                salary:req.body.salary
            })
            data.save()
                res.json({"status":"success",data})
        }
        else{
            res.json({"status":"failed...unauthorized User...!"})
        }
    })

};

//update Employee --admin
exports.updateEmployee = async(req,res)=>{
    let employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(500).json({
            success: false,
            message:"Employee Not Found...!",
        })
    }
    employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        employee
    })
}

//Delete employee --Admin
exports.deleteEmployee= async(req,res)=>{
   try {
    const id = req.params.id;
    const data = req.body;
    const deletedData = await Employee.findOneAndDelete({"_id":id},data)
    res.status(200).json({
        success: true,
        message :"employee deleted succesfully"
    })
   } catch (error) {
    res.status(400).json({
        success: false,
        message : error.message
    })
   }
}