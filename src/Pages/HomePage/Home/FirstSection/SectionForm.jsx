import { useState } from "react";
import useaxios from "../../../../Component/Hooks/Useaxios";
import Swal from "sweetalert2";

const image_hoistiong_key = import.meta.env.VITE_IMAGE_HOISTING;
const image_upload = `https://api.imgbb.com/1/upload?key=${image_hoistiong_key}`;

const SectionForm = () => {
    const [showName, setShowName] = useState({});
    const axiosPublic = useaxios();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const details = form.details.value;
        const imageFile = form.imageFile.files[0];
        const formdata = new FormData();
        formdata.append("image", imageFile);
        console.log(name, details, imageFile);
        const formData = { name, details, imageFile };

        try {
            const formData = new FormData();
            formData.append("image", imageFile);
            const imageResponse = await axiosPublic.post(image_upload, formData);
            const imageUrl = imageResponse.data.data.url;
            const formInfo = { name, details, imageUrl };
            const formDataUpload = await axiosPublic.post('/post', formInfo);
            console.log("hellow data", formDataUpload);

            if (formDataUpload.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully uploaded your post",
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset();
                setShowName({});
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong during the upload."
            });
        }
    };

    return (
        <div>
            <div className="backdrop-blur-xl bg-white/20 rounded-xl h-[600px] w-[630px]">
                <form onSubmit={HandleSubmit}>
                    <div className="py-12 px-12 flex flex-col gap-6">
                        <h2 className="text-3xl font-bold italic">
                            Upload <span className="text-[#fb5770]">Your Post</span>
                        </h2>

                        {/* Name Input */}
                        <input
                            name="name"
                            placeholder="Your Name"
                            className="w-[500px] px-4 h-[40px] border-[#fb5770] border-b rounded-md"
                            type="text"
                        />

                        {/* Details Textarea */}
                        <textarea
                            name="details"
                            cols={12}
                            rows={12}
                            placeholder="Your Opinion"
                            className="px-4 py-3 border-[#fb5770] border-b rounded-md"
                        ></textarea>

                        {/* File Input */}
                        <div>
                            <label
                                htmlFor="type2-1"
                                className="flex max-w-[380px] md:w-[380px] cursor-pointer"
                            >
                                <div className="w-fit whitespace-nowrap bg-[#fb5770] px-2 py-1 text-sm text-white">
                                    Choose File
                                </div>
                                <div className="flex w-full max-w-[380px] items-center border-b-[2px] border-[#fb5770] px-2 text-sm font-medium text-gray-400">
                                    {showName.name ? showName.name : "No File Chosen"}
                                </div>
                            </label>
                            <input
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        const imageFile = e.target.files[0];
                                        setShowName(imageFile);
                                    }
                                }}
                                className="hidden"
                                type="file"
                                name="imageFile"
                                id="type2-1"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="relative mt-2 inline-block h-10 w-[170px] overflow-hidden border-[#fb5770] px-5 py-2 text-black shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#fb5770] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#fb5770] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SectionForm; // Place this at the bottom of the file
