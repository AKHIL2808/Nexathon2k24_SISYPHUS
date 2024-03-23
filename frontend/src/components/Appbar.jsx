import { Link } from "react-router-dom"
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Appbar() {
    const [isOpen, setIsOpen] = useState(true);
    const navbarItems = [
        {
            name: "Home",
            link: "/Home",
        },
        {
            name: "My Greviances",
            link: "/Greviances"
        },
    ]


    return (
        <div className="flex justify-between items-center border-b-2 p-4 ">
            {/* logo */} 
            <div className="flex justify-center items-center font-bold text-xl text-white animate-bounce" >GrevianceMania</div>

            {/* forresponsiveness */}
            <section className={isOpen ? "block" : "hidden"}>
                <div className="fixed top-0 right-0 z-50 backdrop-blur-sm h-full w-full">
                    <div className="flex justify-end h-full ">
                        {/* the box  */}
                        <div className="flex flex-col bg-white h-full w-2/5 ">
                            <div onClick={() => {
                                setIsOpen(!isOpen);
                            }} className="flex items-center justify-end m-2">
                                <IoCloseSharp className="text-xl" />
                            </div>
                            <div >
                                    <div className="flex flex-col text-white justify-center items-center gap-10 m-4">
                                    {navbarItems.map((value, index) => {
                                        return <Link to={value.link} key={index} className="border-b-2 w-full text-center">{value.name}</Link>
                                    })}
                                <div className="bg-green-500 font-semibold  text-center rounded-lg hover:text-white hover:scale-105 w-3/5 px-2 py-2">
                                    <button >Greviances+</button>
                                </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* buttons */}
            <div className="flex justify-center items-center invisible md:visible  text-white font-semibold text-md gap-6 mx-5">
                {navbarItems.map((value, index) => {
                    return <Link  to={value.link} key={index} className="hover:scale-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-2 m-1 outline-none rounded-lg text-md transition duration-500 bg-gray-900 hover:animate-pulse cursor-pointer text-green-yellow shadow-normal hover:shadow-inner">{value.name}</Link>
                })}
                {/* <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold rounded-lg hover:text-white hover:scale-105 px-2 py-2">
                    <button >Add Greviances</button>
                </div> */}
                <div onClick={() => {
                    setIsOpen((prevValue) => (!prevValue))
                }} className="visible  md:collapse ">
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}