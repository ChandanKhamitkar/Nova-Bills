import express from "express";
import Invoices from "../../../models/invoiceModel.js";
const router = express.Router();

export default router.get("/api/user/getInvoice", async (req, res) => {
  const ID = req.user;

  try {
    const allInvoices = await Invoices.find({ user: ID })
      .populate("user")
      .then(item => {
          return res.status(200).json({ invoiceData: item, success: true });
      });
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({ success: false });
  }
});
