import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

const LeftBar = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='bg-[#121212] text-gray-300 w-full rounded-md p-6 flex flex-col gap-4'>
            <div className="flex items-center cursor-pointer transition-all duration-300 hover:text-white text-lg font-semibold gap-4"><span className="text-2xl"><MdHomeFilled /></span> Home</div>
            <div className="flex items-center cursor-pointer transition-all duration-300 hover:text-white text-lg font-semibold gap-4"><span className="text-2xl"><IoIosSearch /></span>Search</div>
        </div>
        <div className="bg-[#121212] rounded-md p-3 h-full">
            <div className="flex flex-col gap-4">
                <div className="flex w-[97%] font-semibold text-gray-300  mx-auto justify-between">
                    <div className="flex cursor-pointer transition-all duration-300 hover:text-white items-center  gap-2 text-sm">
                        <span><VscLibrary /></span> Your Library
                    </div>
                    <div className="flex gap-2 text-lg">
                        <div className="p-2 hover:bg-[#1A1A1A] cursor-pointer rounded-full">
                            <FaPlus />
                        </div>
                        <div className="p-2 hover:bg-[#1A1A1A] cursor-pointer rounded-full">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="bg-[#242424] rounded-lg p-4 flex flex-col gap-4 items-start">
                    <h3 className="font-semibold">Create your first playlist</h3>
                    <p className="text-sm">It's easy, we'll help you</p>
                    <button className="bg-white text-black px-2 py-1 rounded-full font-semibold text-sm">Create playlist</button>
                </div>
                <div className="bg-[#242424] rounded-lg p-4 flex flex-col gap-4 items-start">
                    <h3 className="font-semibold">Let's find some podcats to follow</h3>
                    <p className="text-sm">We'll keep you updated on new episodes</p>
                    <button className="bg-white text-black px-2 py-1 rounded-full font-semibold text-sm">Browse podcasts</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftBar