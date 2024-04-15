import { CircleCheck, CircleCheckBig } from "lucide-react";

export default function SampleCard(props) {
  return (
    <div
      onClick={(e) => {
        props.code(props.id);
      }}
      className={`w-80 min-h-96 rounded-lg px-3 py-6 flex flex-col justify-center items-center gap-5 backdrop-blur-lg ${
        props.id === props.selectedID
          ? "border border-blue-300 bg-blue-300 bg-opacity-20"
          : "border bg-gray-300 bg-opacity-10"
      }`}
    >
      <div className="w-60 space-y-4">
        <p className="w-full flex justify-between items-center">
          <span>{props.title}</span>
          <span className="flex justify-center items-center space-x-2">
            {props.id === props.selectedID ? (
              <CircleCheckBig size={20} className="text-blue-200" />
            ) : (
              <CircleCheck size={19} className="text-gray-700" />
            )}
            <span className={`{selected ? 'font-normal' : ''}`}>
              {props.id === props.selectedID ? "Selected" : "Select"}
            </span>
          </span>
        </p>
        <img
          src={props.image}
          alt="nb"
          className="w-60 rounded-md hover:scale-125 hover:rounded-md hover:shadow-lg hover:shadow-slate-800 hover:transition-all hover:ease-in-out hover:duration-500"
        />
      </div>
    </div>
  );
}
