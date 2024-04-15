import NavbarAfterLogin from "../components/Navbars/NavbarAfterLogin";

export default function Finances() {
  return (
    <div className="bg-gray-300 h-screen">
      <NavbarAfterLogin />

      <div className="my-10 w-3/4 mx-auto">
        <p className="text-center text-2xl font-bold drop-shadow-md font-mono tracking-wide">
          Finances
        </p>

        <table class="table-auto w-[70%] mx-auto">
          <thead>
            <tr>
              <th className="text-left text-gray-700 font-semibold">Billing Date</th>
              <th className="text-left text-gray-700 font-semibold">To</th>
              <th className="text-left text-gray-700 font-semibold">Price</th>
              <th className="text-left text-gray-700 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-white text-gray-400">Mar,22 2024</td>
              <td className="bg-white text-gray-400">Malcolm Lockyer</td>
              <td className="bg-white text-gray-400">$1961</td>
              <td className="bg-white text-gray-400">Paid</td>
              <td><button  className="bg-red-300 px-2 py-4 rounded-lg">Pending</button><button className="bg-green-300 px-1 py-4 rounded-lg">Paid</button></td>
            </tr>
      
          </tbody>
        </table>
      </div>
    </div>
  );
}
