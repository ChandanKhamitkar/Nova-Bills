import FeatureBenefit from "../components/Cards/features/FeatureBenefit.jsx";
import FeaturesBenefit from "../../utils/Dashboard/FeaturesBenefit.js";
import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin.jsx";
import Features from "../../utils/Dashboard/Features.js";
import blueBack from "../../assets/Images/intro_blue_ball.png";
import Feature from "../components/Cards/features/Feature.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full  justify-center items-center rounded-md  bg-black/[0.96] antialiased bg-grid-white/[0.025] relative overflow-hidden flex flex-col ">
      <NavbarAfterLogin />
      <img
        src={blueBack}
        alt="blueBall"
        className="absolute top-20 right-96 opacity-15 w-[500px] "
      />

      <div className="w-[80%] flex flex-col justify-center items-start text-white h-[300px] space-y-4">
        <p className="text-5xl font-bold from-orange-700 to-orange-400 bg-gradient-to-r bg-clip-text text-transparent">Dashboard</p>
        <p className="text-gray-500 text-lg">
          Powerful features for modern marketing teams
        </p>
      </div>

      <div className="w-full py-10 border-y border-gray-900 bg-black/30 backdrop-blur-sm">
        <div className="w-[80%] flex flex-wrap justify-center items-center mx-auto gap-6">
          {Features.map((item, index) => (
            <Feature
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              svg={item.svg}
              imgLink={item.imgLink}
              btnTxt={item.btnTxt}
              navigateTo={item.navigateTo}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mx-auto flex-wrap my-16 space-x-6">
          {FeaturesBenefit.map((item, index) => (
            <FeatureBenefit
              key={index}
              id={index}
              svg={item.svg}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
