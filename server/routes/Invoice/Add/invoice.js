import express from "express";
import Invoices from "../../../models/invoiceModel.js";

const router = express.Router();

export default router.post("/api/user/addInvoice", async (req, res) => {
  const ID = req.user;
  const {invoiceNo, billedTo, amount} = req.body;

  try {

    let currentDate = new Date().toLocaleDateString('en-IN', {
      month: "short",
      day: 'numeric',
      year: 'numeric'
    });

    const newInvoice = new Invoices({
        date : currentDate,
        invoiceNo,
        billedTo,
        amount,
        user : ID,
    });

    const savedInvoice = await newInvoice.save();
    res.status(200).json({success : true});

  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({success : false});
  }
});
