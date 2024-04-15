import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin";
import DesignsInfo from "../../utils/Designs/DesingsInfo";
import SampleCard from "../components/Step-2/SampleCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NB001 from "../Templates_designs/NB001.jsx";
import NB002 from "../Templates_designs/NB002.jsx";

export default function Step2() {
  const location = useLocation();
  const [invoiceDetails, setInvoiceDetails] = useState({
    billedTo: {},
    items: [],
  });
  useEffect(() => {
    if (location.state) {
      const { billedTo, items } = location.state;
      setInvoiceDetails({ billedTo, items });
    }
  }, [location.state]);

  const [invoiceCode, setInvoiceCode] = useState('NB001');
  const invoiceComponents = [
    {code : 'NB001', component : <NB001 invoiceDetails={invoiceDetails} />},
    {code : 'NB002', component : <NB002 invoiceDetails={invoiceDetails} />},
  ]

  const selectedTemplate = invoiceComponents.find(item => item.code === invoiceCode);
  return (
    <div className="bg-img-common">
      <NavbarAfterLogin />

      <div className="w-[95%] h-full rounded-lg bg-gray-500 bg-opacity-50 backdrop-blur-md p-6 mx-auto my-10">
        <div className="flex justify-center items-center space-x-7 mx-auto">
          {DesignsInfo.map((item, index) => (
            <SampleCard
              key={index}
              id={index}
              title={item.title}
              image={item.image}
              code={(id) => setInvoiceCode(DesignsInfo[id].imgCode)}
            />
          ))}
        </div>
        {selectedTemplate && selectedTemplate.component}
      </div>
    </div>
  );
}
