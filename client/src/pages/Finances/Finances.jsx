import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin";
import {
  Ban,
  CircleCheck,
  Ellipsis,
  SquareX,
  Pencil,
  SendToBack,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default function Finances() {
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState([]);
  const [moreVisibleIndex, setMoreVisibleIndex] = useState(null);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

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

  const handleUpdateStatus = async (
    ID,
    status,
    endpoint,
    successMessage,
    errorMessage
  ) => {
    try {
      const token = Cookies.get("nb_token");
      const response = await axios.put(
        `${baseURL}/api/user/${endpoint}`,
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
        toast.success(`${successMessage}`);
      } else {
        toast.error(`${errorMessage}`);
      }
    } catch (error) {
      console.log(Error);
      toast.error("Internal Server Error!");
    }
  };

  const toggleMoreVisible = (index) => {
    setMoreVisibleIndex(index === moreVisibleIndex ? null : index);
  };

  const toggleExpandedRow = (index) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleEditOrder = (item) => {
    navigate("/invoiceinput", {
      state: {
        invoiceID: item._id,
        billedTo: item.billedTo,
        items: item.items,
      },
    });
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
                <TableHead head={"Client"} />
                <TableHead head={"Billing Date"} />
                <TableHead head={"Invoice No"} />
                <TableHead head={"Amount"} />
                <TableHead head={"Status"} />
                <TableHead head={""} />
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((item, index) => (
                <>
                  <tr
                    key={index}
                    className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light"
                  >
                    <TableRow
                      txt={item.billedTo.client}
                      item={item}
                      client={true}
                    />
                    <TableRow txt={item.date} item={item} />
                    <TableRow txt={item.invoiceNo} item={item} />
                    <TableRow txt={item.amount} item={item} />
                    <RowStatus item={item} />

                    <td
                      className={`p-6 flex justify-center items-center bg-correct-black-light cursor-pointer text-gray-400 space-x-5 ${
                        !item.orderStatus ? "order-cancel" : ""
                      }`}
                    >
                      <StatusHandleButton
                        item={item}
                        index={index}
                        invoiceData={invoiceData}
                        setInvoiceData={setInvoiceData}
                        handleUpdateStatus={handleUpdateStatus}
                        type={item.status ? "Unpaid" : "Paid"}
                      />

                      <div
                        key={index}
                        onClick={() => toggleMoreVisible(index)}
                        className="relative flex justify-center items-center flex-col text-gray-400 self-end"
                      >
                        <Ellipsis />
                        <p className="text-sm">More</p>
                      </div>

                      {moreVisibleIndex === index && (
                        <div className="w-[10%] absolute h-auto right-14 z-[100] bg-white rounded-md px-1 py-2 text-black">
                          <X
                            onClick={() => {
                              toggleMoreVisible(index);
                            }}
                            size={18}
                            className="float-right mr-1 mb-4 hover:text-gray-800"
                          />
                          <ul className="space-y-2">
                            <li
                              onClick={() => {
                                const updatedData = [...invoiceData];
                                updatedData[index].orderStatus =
                                  !item.orderStatus;
                                setInvoiceData(updatedData);
                                handleUpdateStatus(
                                  item._id,
                                  item.status,
                                  "OrderStatus",
                                  "Order Cancled!",
                                  "Issue in the cancling order."
                                );
                              }}
                              className="hover:bg-gray-200 w-full px-3 py-1 hover:scale-105 hover:font-medium text-sm flex justify-start items-center space-x-2"
                            >
                              <span className="text-gray-600">
                                <SquareX size={17} />
                              </span>
                              <span> Cancel Order</span>
                            </li>
                            <li
                              onClick={() => handleEditOrder(item)}
                              className="hover:bg-gray-200 w-full px-3 py-1 hover:scale-105 hover:font-medium text-sm flex justify-start items-center space-x-2"
                            >
                              <span className="text-gray-600">
                                <Pencil size={17} />
                              </span>
                              <span> Edit Order</span>
                            </li>
                            <li
                              onClick={() => toggleExpandedRow(index)}
                              className="hover:bg-gray-200 w-full px-3 py-1 hover:scale-105 hover:font-medium text-sm flex justify-start items-center space-x-2 "
                            >
                              <span className="text-gray-600">
                                <SendToBack size={17} />
                              </span>
                              <span> View Order Details</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                  {expandedRowIndex === index && (
                    <tr>
                      <td
                        colSpan="6"
                        className="bg-correct-black-light text-white p-6"
                      >
                        <p className="text-lg mb-3 text-gray-300">
                          Client's order details are :
                        </p>
                        {item.items.map((details, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center text-gray-400"
                          >
                            <p className="text-center w-[33%]">
                              {details.itemName}
                            </p>
                            <p className="text-center w-[33%]">
                              x{details.qty}
                            </p>
                            <p className="text-center w-[33%]">
                              ${details.amount}
                            </p>
                          </div>
                        ))}
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

const TableHead = (props) => {
  return (
    <th className=" text-txt-dark font-semibold text-lg p-5">{props.head}</th>
  );
};

const TableRow = ({ txt, item, client }) => {
  return (
    <td
      className={`p-6 text-center bg-correct-black-light text-white ${
        client && "font-semibold"
      } ${!item.orderStatus ? "order-cancel" : ""}`}
    >
      {txt}
    </td>
  );
};

const RowStatus = ({ item }) => {
  return (
    <td
      className={`p-6 text-center bg-correct-black-light text-white ${
        !item.orderStatus ? "order-cancel" : ""
      }`}
    >
      <span
        className={`px-3 py-1 rounded-xl ${
          item.status ? "bg-green-400" : "bg-yellow-400"
        } text-white font-semibold`}
      >
        {item.status ? "Paid" : "Unpaid"}
      </span>
    </td>
  );
};

const StatusHandleButton = ({
  item,
  index,
  invoiceData,
  setInvoiceData,
  handleUpdateStatus,
  type,
}) => {
  return (
    <div
      onClick={() => {
        const updatedData = [...invoiceData];
        updatedData[index].status = !item.status;
        setInvoiceData(updatedData);
        handleUpdateStatus(
          item._id,
          item.status,
          "PaymentStatus",
          "Status Updated",
          "Issue in the updating status."
        );
      }}
      className={`flex flex-col justify-center items-center  ${
        item.status ? "hover:text-green-400" : "hover:text-yellow-400"
      } `}
    >
      {item.status ? <CircleCheck /> : <Ban size={22} />}

      <p className="text-sm">Mark {type}</p>
    </div>
  );
};
