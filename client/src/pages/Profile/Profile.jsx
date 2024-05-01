import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin.jsx";
import BrandLogo from "../../assets/Logos/brandLogo.png";
import { Pencil } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import UpdateProfileModal from "../components/PopupModals/UpdateProfileModal.jsx";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import updateProfile from "../../utils/Profile/UpdatableInfo.js";
import blueBack from "../../assets/Images/intro_blue_ball.png";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Profile() {
  const navigate = useNavigate();

  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

  const [profileData, setProfileData] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const token = Cookies.get("nb_token");
      const response = await axios.get(`${baseURL}/api/user/getProfileData`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProfileData(response.data);
      console.log("Profile data fetched successfully!");
    } catch (error) {
      console.log("Error : ", error);
      toast.error("Internal server error! | Session Expired");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [navigate]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [updateOption, setUpdateOption] = useState("Address");

  return (
    <div className="min-h-screen w-full  justify-center items-center rounded-md  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col ">
      <NavbarAfterLogin />

      <img
        src={blueBack}
        alt="blueBall"
        className="absolute top-0 right-80 opacity-20 w-[1000px] "
      />

      <div className="space-y-7 my-7 py-7 w-full border-y border-gray-900 bg-black/30 backdrop-blur-sm">
        <div className="flex justify-center items-center gap-6 ">
          <div className="bg-stone-50/10 h-[500px] p-6 space-y-5 flex flex-col justify-center items-center rounded-lg ">
            <div className="w-24 h-24 bg-slate-200 rounded-full shadow-lg shadow-gray-700 mx-auto relative flex justify-center items-center">
              <img
                src={BrandLogo}
                alt="User Logo"
                className="absolute w-full p-2"
              />
            </div>
            <div className="space-y-2 text-center ">
              <p className="text-3xl font-semibold text-white text-center antialiased tracking-wide drop-shadow-md">
                Google
              </p>
              <p className="text-base text-gray-300">Company Type</p>
              <p className="text-base text-gray-400">
                Enter your desired text here, this is the sample text.
              </p>
            </div>
          </div>

          <div className="bg-stone-50/10 h-[500px] p-6 space-y-5 flex flex-col justify-center items-center rounded-lg ">
            <div>
              <p className="text-2xl text-white font-semibold self-start tracking-wide">
                Revenue Track Record
              </p>
              <p className="text-gray-400 text-base text-left">
                Here is your Weekly and monthly sales.
              </p>
            </div>
            <RevenueTrack />
            <RevenueTrack />
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="relative drop-shadow-xl w-96 h-72 overflow-hidden rounded-xl bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 backdrop-blur-sm bg-opacity-45">
            <div className="absolute flex flex-col space-y-3 items-start py-6 px-4 justify-start text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] backdrop-blur-sm bg-opacity-45">
              <div className="flex flex-col justify-between h-full w-full">
                <p className="text-xl font-bold drop-shadow-md ">Address : </p>
                <div className="h-px bg-gray-400 w-full"></div>
                <div className="space-y-1 font-mono">
                  <p>
                    Full Name: <span>{profileData.fullName}</span>{" "}
                  </p>
                  <p>
                    Phone Number: <span>{profileData.phoneNumber}</span>{" "}
                  </p>
                  <p>
                    Address: <span>{profileData.address}</span>{" "}
                  </p>
                  <p>
                    City: <span>{profileData.city}</span>{" "}
                  </p>
                  <p>
                    Pincode: <span>{profileData.pincode}</span>{" "}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setUpdateOption("Address");
                  setShowUpdateProfileModal(!showUpdateProfileModal);
                }}
                className="px-4 py-1 rounded-lg border flex justify-center items-center space-x-1 hover:focus:ring-1 self-stretch"
              >
                <Pencil size={15} /> <span>Edit</span>
              </button>
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2 opacity-70"></div>
          </div>

          <div className="relative drop-shadow-xl w-96 h-72 overflow-hidden rounded-xl bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 backdrop-blur-sm bg-opacity-45">
            <div className="absolute flex flex-col space-y-3 items-start py-6 px-4 justify-start text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] backdrop-blur-sm bg-opacity-45">
              <div className="flex flex-col justify-between h-full w-full">
                <p className="text-xl font-bold drop-shadow-md ">
                  Account Details :{" "}
                </p>
                <div className="h-px bg-gray-400 w-full"></div>
                <div className="space-y-1 font-mono">
                  <p>
                    Bank Name: <span>{profileData.bankName}</span>{" "}
                  </p>
                  <p>
                    Account Name: <span>{profileData.accountName}</span>{" "}
                  </p>
                  <p>
                    Account No: <span>{profileData.accountNumber}</span>{" "}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setUpdateOption("Account");
                    setShowUpdateProfileModal(!showUpdateProfileModal);
                  }}
                  className="px-4 py-1 w-full rounded-lg border flex justify-center items-center space-x-1 hover:focus:ring-1 self-stretch"
                >
                  <Pencil size={15} /> <span>Edit</span>
                </button>
              </div>
            </div>

            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2 opacity-70"></div>
          </div>
        </div>
      </div>
      {showUpdateProfileModal && (
        <UpdateProfileModal
          onClose={() => setShowUpdateProfileModal(false)}
          updateOption={updateOption}
          obj={updateProfile}
          onUpdate={fetchData}
        />
      )}
      <Toaster />
    </div>
  );
}

const RevenueTrack = () => {
  return (
    <div className="rounded-lg bg-white/5 w-full flex justify-between items-center py-4 px-5 space-x-4">
      <p className="text-5xl text-white font-bold ">500$</p>
      <p className="text-stone-50">This week Earn</p>
    </div>
  );
};
