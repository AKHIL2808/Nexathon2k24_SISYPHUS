
import { useState } from "react"
import GreviancesComponents from "../components/GreviancesComponents"
import Appbar from "../components/Appbar"

function Greviances() {
    const [greviance, setGreviance] = useState([
        {
            title: "Attendance",
            description: "Regarding wrong attendance",
            department: "Artificial Intelligence and Data Structure",
            status: true,
        },
        {
            title: "Attendance",
            description: "Regarding wrong attendance",
            department: "Artificial Intelligence and Data Structure",
            status: false,
        },
    ])
    return (
        <div className="text-white animated-background bg-gradient-to-br from-black via-black to-pink-500 h-screen">
            <div>
                <Appbar />
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[2px] w-full"></div>
            <div className="flex flex-col justify-center items-center gap-5 mt-5 w-full ">
                {greviance.map((value, index) => {
                    return <GreviancesComponents key={index} title={value.title} description={value.description} department={value.department} status={value.status} />
                })}
            </div>
        </div>
    )
}

export default Greviances
