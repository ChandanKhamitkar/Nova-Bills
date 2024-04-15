import express from "express";
import Users from "../../models/userModel.js";

const router = express.Router();

export default router.get("/api/user/getProfileData", async (req, res) => {
  const ID = req.user;
  try {
    const user = await Users.findById(ID);
    if (!user) {
      console.log("User not found.");
      return res.status(400).json({ message: "User not found." });
    }
    res
      .status(200)
      .json({
        fullName: user.fullName,
        address: user.address,
        city: user.city,
        pincode: user.pincode,
        state: user.state,
        phoneNumber: user.phoneNumber,
        bankName: user.bankName,
        accountName: user.accountName,
        accountNumber: user.accountNumber,
      });
  } catch (error) {
    console.log("Error : ", error);
  }
});
