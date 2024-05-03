import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import signup from "./routes/Signup/signup.js";
import login from "./routes/Login/login.js";
import Verification from "./routes/Verification/sendOTP.js";
import Authentication from "./middleware/Auth.js";
import getProfileData from "./routes/Profile/getProfileData.js";
import updateProfile from "./routes/Profile/updateProfile.js";
import invoiceRouteAdd from "./routes/Invoice/Add/invoice.js";
import invoiceRouteGet from "./routes/Invoice/Get/invoice.js";
import paymentStatus from "./routes/Invoice/Update/PaymentStatus/paymentStatus.js";
import orderStatus from "./routes/Invoice/Update/OrderStatus/orderStatus.js";
import invoiceCount from "./routes/Invoice/Get/Count/invoice.js";
import ReportData from "./routes/Invoice/Get/Report/invoice.js";
// import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/", (req,res)=>{
    res.status(200).json({message : "NovaBills is a Invoice generator."});
})
app.use(signup);
app.use(login);
app.use(Verification);
app.use(Authentication, getProfileData);
app.use(Authentication, updateProfile);
app.use(Authentication, invoiceRouteAdd);
app.use(Authentication, invoiceRouteGet);
app.use(Authentication, paymentStatus);
app.use(Authentication, orderStatus);
app.use(Authentication, invoiceCount);
app.use(Authentication, ReportData);

// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

