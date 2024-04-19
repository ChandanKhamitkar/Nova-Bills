import mongoose from "mongoose";
import User from "./userModel.js";

const {Schema, model} = mongoose;

const invoiceSchema = new Schema(
    {
        date : {
            type : Date,
        },
        
        invoiceNo : {
            type: String,
        },

        billedTo : {
            type : String,
        },

        amount : {
            type : Number,
        },

        status : {
            type : Boolean,
            default : false,
        },
        
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    },
);

const Invoice = model("Invoice", invoiceSchema);
export default Invoice;