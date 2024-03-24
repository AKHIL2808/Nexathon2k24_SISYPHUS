import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Appbar from "../components/Appbar";

export default function ApplyGreviance() {
    const navigate = useNavigate();
    const [newBlog, setNewBlog] = useState({
        title: "",
        description: "",
    })

    // async function handleSubmit() {
    //     // console.log(newBlog);
    //     try {
    //         const response = await axios.post(`${BACKEND_ROUTE}blog/post`, newBlog
    //             , {
    //                 headers: {
    //                     "Authorization": localStorage.getItem("token"),
    //                 },
    //             })
    //         localStorage.setItem("blogId", response.data.post.id);
    //         navigate("/blog");

    //     } catch (error) {
    //         alert("Error while creating blog: " + error);
    //     }
    // }

    function handleChange(e) {
        const { name, value } = e.target;
        // console.log(name, value);
        setNewBlog((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <div className="bg-black h-screen">
            <Appbar isHome={false} />
            <div className="flex flex-col justify-center items-center gap-4 pt-10">
                <textarea name="title" value={newBlog.title} placeholder="Title..." onChange={handleChange} className="text-5xl  placeholder:p-1 rounded-lg w-3/5" />
                <textarea name="description" value={newBlog.description} placeholder="Boliye...." onChange={handleChange} className="text-xl  placeholder:text-2xl placeholder:p-2 h-96 rounded-lg w-3/5" />
                <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2 mt-4">Add Greveance</button>
            </div>
        </div>
    )

}