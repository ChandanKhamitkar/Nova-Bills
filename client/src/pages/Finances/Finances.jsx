import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin";
// import { CircleCheck } from "lucide-react";
import { Ban } from "lucide-react";

export default function Finances() {
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
                <th className=" text-txt-dark font-semibold text-lg p-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-100 hover:bg-opacity-5 border-b border-border-table-dark-light">
                <td className=" p-6 text-center bg-correct-black-light text-white font-semibold">
                  Malcolm Lockyer
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  Mar,22 2024
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  NB001
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  $1961
                </td>
                <td className=" p-6 text-center bg-correct-black-light text-gray-400">
                  <span className="px-3 py-1 rounded-xl bg-green-400 text-white font-semibold">
                    Paid
                  </span>
                </td>
                <td className=" p-6 flex justify-center items-center bg-correct-black-light cursor-pointer hover:text-yellow-400 text-gray-400">
                  <div className="flex flex-col justify-center items-center">
                    <Ban />
                    <p>Mark Unpaid</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
