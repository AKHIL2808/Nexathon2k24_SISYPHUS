import Department from "../components/DepartmentComponent";
import Appbar from "../components/Appbar";
import { useState } from "react";

export default function Departments() {
    const [cards, setCards] = useState([
        {
            title: "Artificial Intellingence",
            description: "study about intelligence"
        },
        {
            title: "Computer Science",
            description: "Computer science Department"
        }
    ])

    return (
        <div className="w-screen animated-background h-screen bg-gradient-to-br from-black via-black to-pink-500 ">
            <div>
                <Appbar />
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[2px] w-full"></div>
            <div className="grid grid-cols-4 text-white gap-10 p-4">
                {cards.map((value, index) => {
                    return <div className="col-span-1">
                        <Department key={index} title={value.title} description={value.description} />
                    </div>
                })}
            </div>
        </div>
    )
}