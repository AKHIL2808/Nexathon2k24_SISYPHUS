import { useNavigate } from "react-router-dom";

export default function DepartmentComponent({ title, description }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col h-96 w-full bg-[#1d1c20] backdrop-blur-sm bg-white/10 border-2 border-white-500 hover:scale-105 rounded-xl gap-16">
      <h1 className="text-white text-xl font-bold md-4">{title}</h1>
      <p className="text-white ">{description}</p>
      <button onClick={() => {
        navigate("/ApplyGreviance")
      }} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-2/3 rounded-lg py-2">Apply Grevience</button>
    </div>
  )
}