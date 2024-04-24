import mongoose from "mongoose";
import User from "./userModel.js";
import { string } from "zod";

const {Schema, model} = mongoose;

const invoiceSchema = new Schema(
    {
        date : {
            type : String,
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

        orderStatus : {
            type : Boolean,
            default : true,
        },
        
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    },
);

const Invoice = model("Invoice", invoiceSchema);
export default Invoice;