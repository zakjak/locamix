import Link from "next/link"
import Search from "./Search"
import Location from "./Location"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const Navbar = () => {
  return (
    <div className="bg-[#101010] h-16 flex flex-col justify-center">
        <div className="flex items-center justify-between w-[95%] mx-auto">
            <div className="flex gap-2">
                <div title="Go back" className="p-2 rounded-full bg-black cursor-pointer">
                    <FaChevronLeft />
                </div>
                <div title="Go forward" className="p-2 rounded-full bg-black cursor-pointer">
                    <FaChevronRight />
                </div>
            </div>
            <div className="flex gap-2">
                <button className="hover:scale-110 transition-all duration-200">Sign up</button>
                <button className="bg-white py-2 px-4 text-black font-semibold rounded-full hover:scale-110 transition-all duration-200">log in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar