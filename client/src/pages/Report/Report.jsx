import React, { useEffect, useState } from "react";
import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin.jsx";
import Loader from "../components/Loader/Loader.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Report() {
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("nb_token");
        setLoading(true);
        const response = await axios.get(`${baseURL}/api/user/getReport`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          console.log("Report data : ", response.data.ReportData);
          const ReportData = response.data.ReportData;
          const aggregatedData = ReportData.reduce((acc, entry) => {
            const existingEntry = acc.find(
              (item) => item.month === entry.month
            );
            if (existingEntry) {
              existingEntry.amount += entry.amount;
            } else {
              acc.push({ ...entry });
            }
            return acc;
          }, []);

          setReportData(aggregatedData);
          setLoading(false);
        } else {
          toast.error("please try again!");
        }
      } catch (error) {
        console.log(error);
        toast.error("Internal server error!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" scroll-smooth h-auto pb-96 min-h-screen w-full justify-start items-center bg-black/[0.96] antialiased bg-grid-white/[0.025]  overflow-hidden flex flex-col ">
      <NavbarAfterLogin />

      {loading && <Loader />}
      <Toaster />
    </div>
  );
}
