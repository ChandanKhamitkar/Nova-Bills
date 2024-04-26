import heroImg from "../../assets/Images/dark_blue_spotlight.jpg";
import Card from "../components/Cards/Welcome/Card.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}/api/user/login`, {
        email: formData.email,
        password: formData.password,
      });

      console.log(res.data);
      Cookies.set("nb_token", res.data.token);
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Invalid Credentials!");
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
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg flex justify-center items-center">

        <div className="h-3/4 flex justify-center items-center">
          <div className="min-w-[450px] rounded-2xl h-auto border border-slate-600">

            <Card title={"Sign in to NovaBils"} subTitle={"Start creating your invoice for your business."} />

            <div className="px-6 py-5 bg-gray-950 bg-opacity-30 rounded-b-2xl">
              <form className="flex flex-col justify-center items-center space-y-4">
                <div className="min-w-[80%] space-y-5">
                  <div className=" flex flex-col space-y-1">
                    <label htmlFor="email" className="self-start text-white">
                      Email*
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formData.email}
                      type="text"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                      className="bg-gray-700 bg-opacity-35 text-white rounded-xl px-3 py-1"
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
                      className="bg-gray-700 bg-opacity-35 text-white rounded-xl px-3 py-1"
                    />
                  </div>
                  <p className="text-gray-500 text-xs text-right hover:text-gray-400 cursor-pointer">
                    Forgot Password?
                  </p>

                  <button
                    onClick={login}
                    className="w-full bg-blue-500 rounded-3xl shadow-lg text-white py-2 hover:bg-blue-600 hover:focus:ring-1"
                  >
                    Login
                  </button>

                  <p
                    onClick={() => navigate("/signup")}
                    className="text-white text-sm cursor-pointer select-none"
                  >
                    Not yet registered?{" "}
                    <span className="text-blue-600 text-xs">
                      Create an Account
                    </span>
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
