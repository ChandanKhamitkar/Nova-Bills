import BrandLogo from "../../assets/Logos/brandLogo.png";
import qrCode from "../../assets/Images/qr-code-demo.png";

export default function NB002() {
  return (
    <div className="flex justify-center item-center mx-auto mt-20 mb-7 bg-gray-600">
      {/* main card */}
      <div className="bg-gray-100  min-w-[999px] min-h-[1000px] py-16 px-14">
        {/* div containing logo Invoice title, billed to details, invoiceNO, date */}
        <div className="flex flex-col justify-center items-center space-y-12">
          <div className="w-full flex justify-between items-center mx-auto ">
            <p className="text-5xl font-bold tracking-wide uppercase">
              Invoice
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-right space-y-0">
                <p className="font-bold tracking-wide">Paucek and Lage</p>
                <p>Your Business Partner</p>
              </div>
              <img src={BrandLogo} alt="Brand Logo" className="w-16 h-16" />
            </div>
          </div>

          {/* line */}
          <div className="w-full h-px bg-black"></div>

          <div className="w-full flex justify-between items-center mx-auto">
            <ul className="space-y-2">
              <li>
                <p className="font-semibold uppercase mb-1 text-sm">
                  Invoice to:
                </p>
              </li>
              <li>
                <p className="text-xl font-bold tracking-wider">Imani Olowe</p>
              </li>
              <li className="text-sm">
                <p>+123-456-7890</p>
              </li>
              <li className="text-sm">
                <p>63 Ivy Road, Hawkville, GA, USA 31036</p>
              </li>
            </ul>

            <ul className="text-right self-end">
              <li>Invoice No. 12345</li>
              <li>16 June 2025</li>
            </ul>
          </div>
        </div>

        <table class="border-collapse border border-slate-500 w-full mt-20">
          <thead>
            <tr className="text-left bg-black text-white uppercase text-sm">
              <th className="py-3 px-2">Item</th>
              <th className="py-3 text-center">qty</th>
              <th className="py-3 text-center">Unit Price</th>
              <th className="py-3 text-center">amount</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="py-2 border-2 border-slate-700 pb-2 px-2">
                Eggshell Camisole Top
              </td>
              <td className="py-2 border-2 border-slate-700 text-center">1</td>
              <td className="py-2 border-2 border-slate-700 text-center">
                $<span>123</span>
              </td>
              <td className="py-2 border-2 border-slate-700 text-center">
                $<span>123</span>
              </td>
            </tr>
            <tr>
              <td className="py-2 border-2 border-slate-700 pb-2 px-2">
                Eggshell Camisole Top
              </td>
              <td className="py-2 border-2 border-slate-700 text-center">1</td>
              <td className="py-2 border-2 border-slate-700 text-center">
                $<span>123</span>
              </td>
              <td className="py-2 border-2 border-slate-700 text-center">
                $<span>123</span>
              </td>
            </tr>
            <tr>
              <td className="py-2 border-2 border-slate-700 pb-2 px-2">
                Eggshell Camisole Top
              </td>
              <td className="py-2 border-2 border-slate-700 text-center">1</td>
              <td className="py-2 border-2 border-slate-700 text-center">
                $<span>123</span>
              </td>
              <td className="py-2 border-2 border-slate-700 text-center">
                $<span>123</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Subtotal, total, shipping charges */}
        <div className="float-right min-w-[20%] mt-6 space-y-4 mb-32  ">
          <p className="flex justify-between items-center">
            <span className="font-semibold">Subtotal</span>
            <span>$500</span>
          </p>
          <p className="flex justify-between items-center">
            <span className="font-semibold">Tax</span>
            <span>$0</span>
          </p>
          <div className="h-0.5 bg-black"></div>
          <p className="flex justify-between items-center font-bold text-xl">
            <span>Total</span>
            <span>$500</span>
          </p>
        </div>

        <div className="mt-10">
          <div>
            <p className="font-bold tracking-wide text-lg">Payment Method :</p>
            <div className="text-slate-600 font-normal space-y-1 tracking-wide text-sm">
              <p>Bank Name : Briard Bank</p>
              <p>UPI ID: 19324709127@oksbi</p>
              <p>Drew Feig</p>
            </div>
            <img src={qrCode} alt="demo qr code" className="w-20 h-20 mt-4 opacity-85" />
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-2xl font-sans font-medium ">Thank Your for purchase!</p>
            <div className="w-max text-center space-y-4">
              <p className="font-sans text-xl">Samira Hadid</p>
              <div className="w-full h-px bg-black"></div>
              <p>123, Anywhere St, Any City, ST 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
