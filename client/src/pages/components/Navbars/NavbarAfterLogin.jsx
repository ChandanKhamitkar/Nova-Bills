import Logo from "../../../assets/Logos/logo.png";
import userLogoBlue from "../../../assets/Logos/user-blue-logo.png";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function NavbarAfterLogin() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const token = Cookies.get("nb_token");
    const decodeToken = jwtDecode(token);
    setUser(decodeToken);
  }, []);

  return (
    <nav className={`w-full p-6 flex justify-between text-white items-center`}>
      <div className="flex space-x-4 items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <p className="font-semibold text-xl">NovaBills</p>
      </div>
      <div>
        <ul className="flex space-x-7 font-medium justify-center items-center">
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
          <li onClick={() => navigate("/dashboard")} className="border border-gray-500 rounded-md px-4 py-2 text-sm hover:scale-105 cursor-pointer">
            Return to Dashboard
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              onClick={handleMenu}
              className="bi bi-person-circle text-gray-500 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            {menuVisible && (
              <div className="w-[20%] absolute right-8 top-16 bg-white border border-gray-300 rounded-lg shadow-md p-2 z-[100] space-y-6 px-3 py-4">
                <div className="flex justify-start items-center space-x-4">
                  <img
                    src={userLogoBlue}
                    alt="user logo"
                    className="w-11 h-11 "
                  />
                  <div>
                    <p className="text-xl font-semibold text-black">
                      {user.User.companyName}
                    </p>
                    <p className="text-sm font-medium text-slate-600">
                      {user.User.email}
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 py-2 bg-slate-300 bg-opacity-55 rounded-lg space-y-1">
                  <p className="text-slate-800 tracking-wide text-sm">
                    Missing out on a feature? We'd love to know!
                  </p>
                  <p className="text-blue-500 space-x-2 cursor-pointer hover:scale-105 font-semibold drop-shadow-md flex justify-start items-center">
                    <span>Request a Feature</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </p>
                </div>
                <ul className="text-gray-500 space-y-3">
                  <li className="hover:scale-110 hover:cursor-pointer text-red-500 hover:bg-gray-100 hover:text-red-500 px-2 py-1 flex justify-start items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-box-arrow-in-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                      />
                    </svg>
                    <span>Log Out</span>
                  </li>
                </ul>
                <ul className="flex justify-center items-center space-x-5 text-gray-500 text-xs">
                  <li>Blog</li>
                  <li>.</li>
                  <li>About</li>
                  <li>.</li>
                  <li>Privacy</li>
                  <li>.</li>
                  <li>FAQs</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
