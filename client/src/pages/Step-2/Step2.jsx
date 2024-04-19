import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin";
import DesignsInfo from "../../utils/Designs/DesingsInfo";
import SampleCard from "../components/Step-2/SampleCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NB001 from "../Templates_designs/NB001.jsx";
import NB002 from "../Templates_designs/NB002.jsx";
import { FileDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";


export default function Step2() {
  const location = useLocation();
  const [invoiceDetails, setInvoiceDetails] = useState({
    billedTo: {},
    items: [],
    owner : {},
  });
  useEffect(() => {
    if (location.state) {
      const { billedTo, items, owner } = location.state;
      setInvoiceDetails({ billedTo, items, owner });
    }
  }, [location.state]);

  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    let GT = 0;
    invoiceDetails.items.forEach((item) => {
      GT += parseInt(item.amount);
    });
    setGrandTotal(GT);
  }, [invoiceDetails]);

  const [invoiceCode, setInvoiceCode] = useState({
    code: "NB001",
    id: 0,
  });
  const invoiceComponents = [
    {
      code: "NB001",
      component: (
        <NB001 invoiceDetails={invoiceDetails} grandTotal={grandTotal} />
      ),
    },
    {
      code: "NB002",
      component: (
        <NB002 invoiceDetails={invoiceDetails} grandTotal={grandTotal} />
      ),
    },
  ];

  const selectedTemplate = invoiceComponents.find(
    (item) => item.code === invoiceCode.code
  );

  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  const invoice = async (e) => {
    e.preventDefault();

    const token = Cookies.get("nb_token");

    try {
      const response = await axios.post("http://localhost:8000/api/user/addInvoice", {
        invoiceNo : "NB0001",
        billedTo : invoiceDetails["billedTo"].client,
        amount : grandTotal,
      },
      {
        headers : {
          'content-type' : 'application/json',
          Authorization : `Bearer ${token}`,
        }
      }
    );

      if(response.data.success){
        toast.success("Invoice Stored");
      }
      else{
        toast.error("Failed to add invoice to database.");
      }
      
    } catch (error) {
      console.log("Error adding invoice : ",error);
      toast.error("Interal Server error!");
    }
  };

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
              selectedID={invoiceCode.id}
              code={(id) =>
                setInvoiceCode({ code: DesignsInfo[id].imgCode, id: id })
              }
            />
          ))}
        </div>

        <div ref={pdfRef} className="mx-7 my-10">
          {selectedTemplate && selectedTemplate.component}
        </div>

        <div className="w-full flex justify-center items-center my-10">
          <button onClick={(e) => {
            downloadPDF();
            invoice(e);
          }} class="flex justify-center items-center space-x-3 relative py-2 px-8 text-black text-base font-semibold nded-full overflow-hidden bg-violet-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 shadow-slate-900">
            <span>
              <FileDown />
            </span>
            <span>Download</span>
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
