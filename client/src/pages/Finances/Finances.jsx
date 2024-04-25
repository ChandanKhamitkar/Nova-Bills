import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin";
import {
  Ban,
  CircleCheck,
  Ellipsis,
  SquareX,
  Pencil,
  FileDown,
} from "lucide-react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Finances() {
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState([]);
  const [moreVisibleIndex, setMoreVisibleIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("nb_token");
        const response = await axios.get(`${baseURL}/api/user/getInvoice`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setInvoiceData(response.data.invoiceData.reverse());
        } else {
          toast.error("Error in retriving data!");
        }
      } catch (error) {
        console.log(error);
        toast.error("Internal server error!");
      }
    };

    fetchData();
  }, []);

  const handlePaymentStatus = async (ID, status) => {
    try {
      const token = Cookies.get("nb_token");
      const response = await axios.put(
        `${baseURL}/api/user/PaymentStatus`,
        {
          ID,
          status,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Status Updated");
      } else {
        toast.error("Issue in the updating status.");
      }
    } catch (error) {
      console.log(Error);
      toast.error("Internal Server Error!");
    }
  };

  const handleOrderStatus = async (ID, status) => {
    try {
      const token = Cookies.get("nb_token");
      const response = await axios.put(
        `${baseURL}/api/user/OrderStatus`,
        {
          ID,
          status,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Order Cancled!");
      } else {
        toast.error("Issue in the cancling order.");
      }
    } catch (error) {
      console.log(Error);
      toast.error("Internal Server Error!");
    }
  };

  const toggleMoreVisible = (index) => {
    setMoreVisibleIndex(index === moreVisibleIndex ? null : index);
  };
  return (
    <div className="bg-correct-black-dark h-auto pb-96">
      <NavbarAfterLogin darkMode={true} />

      <div className="my-10 w-3/4 mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-left w-fit text-3xl my-5 font-bold drop-shadow-md tracking-wide text-white">
            Finances
          </p>
          <p className="w-fit text-txt-dark text-lg drop-shadow-md">
            Products sold to Clients /
            <span className="text-blue-600"> History</span>
          </p>
        </div>

        <div className="rounded-xl shadow-lg shadow-gray-800">
          <table class="table-auto w-full mx-auto border border-border-table-dark-light">
            <thead className="bg-correct-black-light w-full rounded-md border-b border-border-table-dark-light">
              <tr>
                <th className=" text-txt-dark font-semibold text-lg p-5">
                  Client
                </th>
                <th className=" text-txt-dark font-semibold text-lg p-5">
                  Billing Date
                </th>
                <th className=" text-txt-dark font-semibold text-lg p-5">
                  Invoice No
                </th>
                <th className=" text-txt-dark font-semibold text-lg p-5">
                  Amount
                </th>
                <th className=" text-txt-dark font-semibold text-lg p-5">
                  Status
                </th>
                <th className=" text-txt-dark font-semibold text-lg p-5"> </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light"
                >
                  <td
                    className={`p-6 text-center bg-correct-black-light text-white font-semibold ${
                      !item.orderStatus ? "order-cancel" : ""
                    }`}
                  >
                    {item.billedTo.client}
                  </td>
                  <td
                    className={`p-6 text-center bg-correct-black-light text-white ${
                      !item.orderStatus ? "order-cancel" : ""
                    }`}
                  >
                    {item.date}
                  </td>
                  <td
                    className={`p-6 text-center bg-correct-black-light text-white ${
                      !item.orderStatus ? "order-cancel" : ""
                    }`}
                  >
                    {item.invoiceNo}
                  </td>
                  <td
                    className={`p-6 text-center bg-correct-black-light text-white ${
                      !item.orderStatus ? "order-cancel" : ""
                    }`}
                  >
                    ${item.amount}
                  </td>
                  <td
                    className={`p-6 text-center bg-correct-black-light text-white ${
                      !item.orderStatus ? "order-cancel" : ""
                    }`}
                  >
                    {item.status ? (
                      <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                        Paid
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-xl bg-yellow-400 text-white font-semibold">
                        Unpaid
                      </span>
                    )}
                  </td>
                  <td
                    className={`p-6 flex justify-center items-center bg-correct-black-light cursor-pointer text-gray-400 space-x-5 ${
                      !item.orderStatus ? "order-cancel" : ""
                    }`}
                  >
                    {item.status ? (
                      <div
                        onClick={() => {
                          const updatedData = [...invoiceData];
                          updatedData[index].status = !item.status;
                          setInvoiceData(updatedData);
                          handlePaymentStatus(item._id, item.status);
                        }}
                        className="flex flex-col justify-center items-center  hover:text-yellow-400"
                      >
                        <Ban size={22} />
                        <p className="text-sm">Mark Unpaid</p>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          const updatedData = [...invoiceData];
                          updatedData[index].status = !item.status;
                          setInvoiceData(updatedData);
                          handlePaymentStatus(item._id, item.status);
                        }}
                        className="flex flex-col justify-center items-center  hover:text-green-400"
                      >
                        <CircleCheck />
                        <p className="text-sm">Mark Paid</p>
                      </div>
                    )}
                    <div
                      key={index}
                      onClick={() => toggleMoreVisible(index)}
                      className="relative flex justify-center items-center flex-col text-gray-400 self-end"
                    >
                      <Ellipsis />
                      <p className="text-sm">More</p>
                    </div>
                    {moreVisibleIndex === index && (
                      <div className="w-[10%] absolute h-auto right-14 z-[100] bg-white rounded-md px-1 py-6 text-black">
                        <ul className="space-y-2">
                          <li
                            onClick={() => {
                              const updatedData = [...invoiceData];
                              updatedData[index].orderStatus =
                                !item.orderStatus;
                              setInvoiceData(updatedData);
                              handleOrderStatus(item._id, item.orderStatus);
                            }}
                            className="hover:bg-gray-200 w-full px-3 py-1 hover:scale-105 hover:font-medium text-sm flex justify-start items-center space-x-2"
                          >
                            <span className="text-gray-600">
                              <SquareX size={17} />
                            </span>
                            <span> Cancel Order</span>
                          </li>
                          <li
                            onClick={() => {
                              navigate("/invoiceinput", {
                                state: {
                                  invoiceID : item._id,
                                  billedTo: item.billedTo,
                                  items: item.items,
                                },
                              });
                            }}
                            className="hover:bg-gray-200 w-full px-3 py-1 hover:scale-105 hover:font-medium text-sm flex justify-start items-center space-x-2"
                          >
                            <span className="text-gray-600">
                              <Pencil size={17} />
                            </span>
                            <span> Edit Order</span>
                          </li>
                          <li className="hover:bg-gray-200 w-full px-3 py-1 hover:scale-105 hover:font-medium text-sm flex justify-start items-center space-x-2">
                            <span className="text-gray-600">
                              <FileDown size={17} />
                            </span>
                            <span> Download</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
