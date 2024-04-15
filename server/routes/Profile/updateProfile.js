import express from "express";
import Users from "../../models/userModel.js";

const router = express.Router();
export default router.put("/api/user/updateProfile", async (req, res) => {
  const ID = req.user;
  const updateFields = req.body;

  try {
    const user = await Users.findById(ID);
    if (user) {
      Object.keys(updateFields).forEach((key) => {
        user[key] = updateFields[key];
      });
      await user.save();
      return res.status(200).json({ message: "Updated successfully" });
    }
    else{
      return res.status(404).json({message : "User not found!"});
    }
  } catch (error) {
    console.log("Error : ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
