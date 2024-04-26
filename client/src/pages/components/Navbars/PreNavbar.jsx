import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/Logos/logo.png";

export default function PreNavbar (){
    const navigate = useNavigate();
    return(
        <nav className="w-[70%] mt-6 mx-auto flex justify-between px-6 text-white items-center">
          <div className="flex justify-center items-center space-x-16">
            <div className="flex space-x-4 items-center">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <p className="font-bold text-2xl tracking-wide">NovaBills</p>
            </div>
            <div>
              <ul className="flex space-x-16 cursor-pointer select-none text-gray-300 text-base">
                <li className="hover:text-white">Features</li>
                <li className="hover:text-white">Blog</li>
                <li className="hover:text-white">Pricing</li>
              </ul> 
            </div>
          </div>
          <div>
              <ul className="flex space-x-6 cursor-pointer select-none text-gray-300 text-base">
                <li onClick={() => navigate("/login")} className="hover:text-white rounded-3xl px-3 py-1 bg-slate-100 bg-opacity-10 backdrop-blur-lg">Log in</li>
                <li onClick={() => navigate("/signup")} className="bg-white rounded-3xl text-black px-3 py-1 text-sm tracking-wide hover:border hover:bg-transparent hover:border-white hover:text-white">Sign Up</li>
              </ul>
            </div>
        </nav>
    )
}