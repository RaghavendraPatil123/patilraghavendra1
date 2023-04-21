import mongoose from "mongoose";
const {Schema}= mongoose;
const productsSchema =new Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    category:{
        type:String,
    },
    description:{
        type:String,
    }
});
export default mongoose.model( 'products',productsSchema);