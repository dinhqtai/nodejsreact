import mongoose from "mongoose"
const Abouts= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    image:{
        type:String,
     
    },
    desc:{
        type:String,
        require:true
    },
    timeUpdate:{
        type:String,
        require:true
    }
})
export default mongoose.model("About",Abouts)