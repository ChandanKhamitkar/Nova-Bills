import Logo from "../../assets/Logos/logo.png";
import heroImg from "../../assets/Images/dark_blue_spotlight.jpg";
import { useNavigate } from "react-router-dom";
// import BenefitsInfo from "../../utils/BenefitsInfo.js";
// import BenefitsCard from "../components/Benefits/BenefitsCard.jsx";

export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg">
        <nav className="w-full mt-6 flex justify-between px-6 text-white items-center">
          <div className="flex space-x-4 items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <p className="font-semibold text-xl">NovaBills</p>
          </div>
          <div>
            <ul className="flex space-x-4 font-medium cursor-pointer select-none">
              {/* <li></li> */}
              <li>About</li>
              <li>Services</li>
              <li onClick={() => navigate("/login")}>Login</li>
              <li onClick={() => navigate("/signup")}>SignUp</li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-col justify-center items-center text-center w-full h-screen space-y-4">
          <p className="bg-my-custom-img-silver text-transparent bg-clip-text w-[80%] text-7xl tracking-wider font-bold py-2 font-mono">
            Streamline your invoicing process effortlessly
          </p>
          <button 
          className="flex justify-center items-center px-6 py-3 rounded-3xl border border-gray-300 text-gray-50 shadow-md shadow-gray-700 hover:scale-105">
            View Templates{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>
        </div>

        {/* <div className="flex flex-col flex-wrap justify-center items-center">
          {BenefitsInfo.map((item, index) => <BenefitsCard key={index} id={index} title={item.title} content={item.content} />)}
        </div> */}
      </div>
    </div>
  );
}
