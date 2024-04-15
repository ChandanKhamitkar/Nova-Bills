import { X } from "lucide-react";
import { useRef } from "react";

export default function OTPModal(props) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center select-none"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={props.onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="w-[500px] min-h-72 py-6 px-4 flex flex-col items-center  bg-blue-600 rounded-xl space-y-5 shadow-lg shadow-gray-800">
          <h1 className="text-2xl font-extrabold text-center font-mono">
            Complete your invoice by below steps...
          </h1>
          <p className="text-center font-semibold text-2xl">
            <ul className="space-y-7 flex flex-col justify-start items-start">
              <li className="space-x-3 flex justify-center items-center">
                <div className="rounded-full relative border w-8 h-8 flex justify-center items-center">
                  <span className="absolute text-sm">1</span>
                </div>
                <span className="text-gray-900 text-lg tracking-wider">
                  Fill the invoice details.
                </span>
              </li>
              <li className="space-x-3 flex justify-center items-center">
                <div className="rounded-full relative border w-8 h-8 flex justify-center items-center">
                  <span className="absolute text-sm">2</span>
                </div>
                <span className="text-gray-900 text-lg tracking-wider">
                  Choose template design.
                </span>
              </li>
              <li className="space-x-3 flex justify-center items-center">
                <div className="rounded-full relative border w-8 h-8 flex justify-center items-center">
                  <span className="absolute text-sm">3</span>
                </div>
                <span className="text-gray-900 text-lg tracking-wider">
                Download your invoice.
                </span>
              </li>

            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
