import FeaturesCard from "./FeaturesCard.jsx";
import FeaturesInfo from "../../utils/FeaturesInfo.js";
import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin.jsx";
import MeteorsCard from "../components/Cards/MeterosCard.jsx";
import UserOptionsInfo from "../../utils/UserOptionsInfo.js";

export default function Dashboard() {
  return (
    <div className="bg-img-common">
      <NavbarAfterLogin />
      <div className="min-h-0.5 w-[50%] mt-20 mb-10 mx-auto max-w-full flex justify-center items-center lightning-stroke"></div>

      <div className="w-2/4 flex flex-wrap justify-center items-center mx-auto gap-5">
        {UserOptionsInfo.map((item, index) => (
          <MeteorsCard
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            svg={item.svg}
            btnTxt={item.btnTxt}
            navigateTo={item.navigateTo}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mx-auto flex-wrap my-16 space-x-6">
        {FeaturesInfo.map((item, index) => (
          <FeaturesCard
            key={index}
            id={index}
            svg={item.svg}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </div>
  );
}
