import { useState } from "react";


const SectionForm = () => {
    const [showName, setShowName] = useState({});
    return (
        <div>
            <div className="backdrop-blur-xl bg-white/20  rounded-xl  h-[600px] w-[630px]">
                <div className="py-12 px-12 flex flex-col gap-6">
                    <h2 className="text-3xl   font-bold italic ">Upload <span className="text-[#fb5770]">Your Post</span> </h2>

                    <input placeholder="Your Name" className="w-[500px] px-4 h-[40px] border-[#fb5770] border-b rounded-md" type="text" name="" id="" />
                    <textarea cols={12} rows={12} placeholder="Your Opinion" className=" px-4 py-3 border-[#fb5770] border-b rounded-md" type="text" name="" id="" />
                    <div>
                        <label htmlFor="type2-1" className="flex max-w-[380px] md:w-[380px] cursor-pointer">
                            <div className="w-fit whitespace-nowrap  bg-[#fb5770] px-2 py-1 text-sm text-white">Choose File</div>
                            <div className=" flex w-full max-w-[380px] items-center  border-b-[2px] border-[#fb5770] px-2 text-sm font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
                        </label>
                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const imageFile = e.target.files[0]; setShowName(imageFile);
                                }
                            }} className="hidden" type="file" name="" id="type2-1"
                        />
                    </div>

                    <div>
                        <button type="button" className="relative mt-2 inline-block h-10 w-[170px] overflow-hidden border-[#fb5770] px-5 py-2 text-black shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#fb5770] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#fb5770] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Submit</button>

                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default SectionForm;