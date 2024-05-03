import React, { useEffect, useState } from "react";
import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin.jsx";
import Loader from "../components/Loader/Loader.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import blueBack from "../../assets/Images/intro_blue_ball.png";

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

      <img
        src={blueBack}
        alt="blueBall"
        className="absolute top-0 right-80 opacity-20 w-[1000px] "
      />

      <div className="w-[80%] flex flex-col justify-center items-start text-white h-[300px] space-y-4">
        <p className="text-5xl font-bold from-orange-700 to-orange-400 bg-gradient-to-r bg-clip-text text-transparent">
          Maximize your business effors with proper statistics
        </p>
        <p className="text-gray-500 text-lg">
          Track your statistics in different ways - As per | year | month | week.
        </p>
      </div>
      <ResponsiveContainer
        width="80%"
        height={500}
        className="mt-20 px-4 pt-10 text-center bg-correct-black-light text-white bg-opacity-50 backdrop-filter backdrop-blur-lg backdrop-saturate-200 rounded-lg"
      >
        <LineChart data={reportData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {loading && <Loader />}
      <Toaster />
    </div>
  );
}
