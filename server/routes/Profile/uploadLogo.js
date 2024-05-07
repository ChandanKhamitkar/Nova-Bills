import express from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from 'url';
import {dirname} from "path";
import Users from "../../models/userModel.js";

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'public', 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export default router.post("/api/user/uploadLogo",upload.single('photo'), async (req, res) => {
  const ID = req.user;
  if(!req.file){
    return res.status(400).json({success: false});
  }
  const photo = req.file.filename;

  try {
    const user = await Users.findById(ID);

    if (user) {

        user.photo = photo;
        await user.save();
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log("Error : ", error);
    return res
      .status(500)
      .json({ success: true, message: "Internal server error" });
  }
});
