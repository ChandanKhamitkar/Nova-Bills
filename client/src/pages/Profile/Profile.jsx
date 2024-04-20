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

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Profile() {
  const navigate = useNavigate();

  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

  const [profileData, setProfileData] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const token = Cookies.get("nb_token");
      const response = await axios.get(
        `${baseURL}/api/user/getProfileData`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
    <div className=" bg-img-common">
      <NavbarAfterLogin />
      <div className="space-y-7 my-7 py-7 border-t border-gray-400 ">
        <p className="text-center text-slate-300">About You</p>

        <div className="w-24 h-24 bg-slate-200 rounded-2xl shadow-lg shadow-gray-700 mx-auto relative flex justify-center items-center">
          <img
            src={BrandLogo}
            alt="User Logo"
            className="absolute w-full p-2"
          />
        </div>
        <p className="text-3xl font-semibold text-white text-center">XYZ</p>

        <div className="flex justify-center items-center gap-6">
          <div className="relative drop-shadow-xl w-96 h-72 overflow-hidden rounded-xl bg-[#3d3c3d] backdrop-blur-sm bg-opacity-45">
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
          <div className="relative drop-shadow-xl w-96 h-72 overflow-hidden rounded-xl bg-[#3d3c3d] backdrop-blur-sm bg-opacity-45">
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
