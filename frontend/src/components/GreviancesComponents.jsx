export default function GreviancesComponents({ title, description, department, status }) {
    return <div className="flex flex-col justify-center border-2 rounded-lg max-h-max w-3/5 p-4 gap-4 transition duration-500 hover:scale-105">
        <div className="flex justify-between ">
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="px-2">
                <button className="hover:scale-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1  rounded-lg ">Chat</button>
            </div>
        </div>
        <div>
            {description}
        </div>
        <div className="flex justify-between">
            <div className="text-sm text-light text-gray-200">
                {department}
            </div>
            <div className="font-light text-sm">
                Status: {status ? "Solved" : "Pending"}
            </div>
        </div>
    </div>
}