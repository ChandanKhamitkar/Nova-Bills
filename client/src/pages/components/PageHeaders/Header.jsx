export default function Header(props) {
    return (
        <div className="w-[80%] flex flex-col justify-center items-start text-white h-[300px] space-y-4">
        <p className="text-5xl font-bold from-orange-700 to-orange-400 bg-gradient-to-r bg-clip-text text-transparent">{props.title}</p>
        <p className="text-gray-500 text-lg">
          {props.subTitle}
        </p>
      </div>
    )
}