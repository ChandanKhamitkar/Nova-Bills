import Logo from "../../assets/Logos/logo.png";
import heroImg from "../../assets/Images/dark_blue_spotlight.jpg";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import OTPModal from "../components/PopupModals/OTPModal";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Signup() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const requestOTP = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
      const callBack = async () => {
        await axios.post(`${baseURL}/api/user/sendOTP`, {
          email : formData.email,
        })
        .then((res) => {
          console.log(res.data.message);
          setShowModal(!showModal);
          return res.status;
        });
      };
      await toast.promise(callBack(), {
        loading: "Sending otp!",
        success: "OTP sent!",
        error: "facing issue!",
      });
  }

  const signup = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        console.log("Password is not Mismatch.");
        toast.error("Kindy re-check your both passwords")
      } else {
        await axios
          .post(`${baseURL}/api/user/signup`, {
            companyName: formData.companyName,
            email: formData.email,
            password: formData.password,
          })
          .then((res) => {
            console.log(res.data.message);
            toast.success(res.data.message);
            toast('Redirecting you to login page!', {
              icon: '⚠️',
            });
            setTimeout(() => {
              navigate("/login")
            }, 3000);
          });
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid format, kindly check your email format.");
    }
  };

  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg">
        <nav className="w-full mt-6 flex justify-between px-6 text-white items-center">
          <div className="flex space-x-4 items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <p className="font-semibold text-xl">NovaBills</p>
          </div>
          <div>
            <ul className="flex space-x-4 font-medium">
              <li className="bg-gray-500 bg-opacity-35 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </li>
            </ul>
          </div>
        </nav>

        <div className="h-3/4 flex justify-center items-center">
          <div className="min-w-[400px] bg-gray-950 bg-opacity-30 rounded-xl h-auto py-8 px-6 space-y-9 border border-blue-400">
            <p className="text-white font-semibold font-xl text-center text-xl">
              Signup
            </p>

            <form className="flex flex-col justify-center items-center space-y-4">
              <div className="min-w-[80%] space-y-5">
                <div className=" flex flex-col space-y-1">
                  <label
                    htmlFor="companyName"
                    className="self-start text-white"
                  >
                    Company Name*
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.companyName}
                    type="text"
                    name="companyName"
                    placeholder="xyz"
                    required
                    className="bg-gray-700 bg-opacity-35 text-white rounded-xl px-1 py-1"
                  />
                </div>
                <div className=" flex flex-col space-y-1">
                  <label htmlFor="email" className="self-start text-white">
                    Email*
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.email}
                    autoComplete=""
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    className="bg-gray-700 bg-opacity-35 text-white rounded-xl px-1 py-1"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="password" className="self-start text-white">
                    Password*
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.password}
                    type="password"
                    name="password"
                    placeholder="123456"
                    required
                    className="bg-gray-700 bg-opacity-35 text-white rounded-xl px-1 py-1"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="confirmPassword"
                    className="self-start text-white"
                  >
                    Confirm Password*
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    placeholder="123456"
                    className="bg-gray-700 bg-opacity-35 text-white rounded-xl px-1 py-1"
                  />
                </div>

                <button
                  onClick={requestOTP}
                  className="w-full bg-blue-500 rounded-3xl shadow-lg text-white py-2 hover:bg-blue-600 hover:focus:ring-1"
                >
                  SignUp
                </button>

                <p onClick={() => navigate("/login")} className="text-white cursor-pointer select-none text-sm">
                  Already have an account!{" "}
                  <span className="text-blue-600 text-xs">Login</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
      {showModal && <OTPModal onClose={() => setShowModal(false)} onVerify={(e) => signup(e)}/>}
    </div>
  );
}
