import studentModel from "../model/student.js"
class studentController
{    static getAll= async (req,res)=>
    {

        console.log("getall")
        try{
               const resp = await studentModel.find();
               res.send(resp);         
        }
        catch(error)
        {
            console.log(error)
        }

    }
    static getById = async (req,res)=>
    {
console.log("getByid")
try{
      const resp = await studentModel.findById(req.params.id);
      res.send(resp);
}
catch(error)
{
    clg(error)
}
}
  
    static createStduent = async  (req, res)=>
    {
  console.log("REQ" + req.body)
        console.log("create")
try{
    // destructring
       const {name, age, fees } = req.body;
       const doc =  new studentModel(

        {
            name : name,
            age : age,
            fees : fees
        }
       )
       const resp = await doc.save();
       res.send(resp);
}
catch(error)
{
     console.log(error)
}


    }
}

export default studentController;