import Department from "../components/DepartmentComponent";
import Appbar from "../components/Appbar";
export default function Departments() {
    return (
        <div className="bg-black">
            <div>
                <Appbar />
            </div>
                <div className="flex justify-center items-center h-screen w-full text-white">
                    <Department title="Artificial Intelligence" />
                </div>

            </div>
            )
}