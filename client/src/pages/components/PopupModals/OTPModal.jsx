import { X, SendHorizontal } from "lucide-react";
import { useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function OTPModal(props) {
  const modalRef = useRef();
  const otpInputRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.onClose();
    }
  };

  const verify = async (e) => {
    e.preventDefault();
    const enteredOTP = otpInputRef.current.value;
    const verifyOTP = async () => {
      await axios
        .post("http://localhost:8000/api/user/verifyOTP", {
          enteredOTP,
        })
        .then((res) => {
          console.log("Verification successfull");
          return res.status;
        });
    };
    await toast.promise(verifyOTP(), {
      loading: "verifying otp!",
      success: "Verification successfyll",
      error: "facing issue!",
    });

    props.onVerify(e);
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
        <div className="w-[500px] min-h-72 py-6 px-4 flex flex-col items-center bg-blue-600 rounded-xl space-y-5 shadow-lg shadow-gray-800">
          <h1 className="uppercase text-2xl font-extrabold">
            otp verification
          </h1>
          <p className="text-center font-semibold text-2xl">
            NovaBills has sent you an OTP! to Email, Enter below and get the use
            of amazing features provided.
          </p>
          <form className="space-y-5 flex flex-col items-center">
            <input
              ref={otpInputRef}
              type="number"
              name="otp"
              required
              placeholder="Enter your OTP here..."
              className="rounded-md shadow-lg p-2 text-black no-arrows border border-gray-300 outline-1 outline-gray-300"
            />
            <button
              onClick={verify}
              className="flex justify-center items-center gap-3 bg-black px-6 py-2 rounded-lg hover:bg-slate-900 hover:focus:ring-1 ring-slate-800 active shadow-sm shadow-slate-800"
            >
              <SendHorizontal /> <span>Verify</span>
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
