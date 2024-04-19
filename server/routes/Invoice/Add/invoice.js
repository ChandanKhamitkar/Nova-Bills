import express from "express";
import Invoices from "../../../models/invoiceModel.js";

const router = express.Router();

export default router.post("/api/user/addInvoice", async (req, res) => {
  const ID = req.user;
  const {invoiceNo, billedTo, amount} = req.body;

  try {

    const newInvoice = new Invoices({
        invoiceNo,
        billedTo,
        amount,
        user : ID,
    });

    const savedInvoice = await newInvoice.save();
    console.log("created invoice : ", savedInvoice);
    res.status(200).json({success : true});

  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({success : false});
  }
});
