import Logo from "../../../../assets/Logos/logo.png";

export default function Card(props) {
    return (
        <div className={`w-full border-b border-gray-700  ${props.roundedFull ? "rounded-2xl" : "rounded-t-2xl" }`}>
        <div className={`flex flex-col space-y-3 items-center py-6 bg-gray-950 bg-opacity-50 ${props.roundedFull ? "rounded-2xl" : "rounded-t-2xl" }`}>
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <p className=" text-xl font-medium text-white">{props.title}</p>
          <p className="text-gray-400 text-sm text-center">{props.subTitle}</p>
        </div>
      </div>
    )
}