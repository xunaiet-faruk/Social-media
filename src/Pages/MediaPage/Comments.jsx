import { IoPersonSharp } from "react-icons/io5";

const Comments = ({ comments }) => {
    return (
        <div className="space-y-12 mb-12">
            {comments?.map((item, index) => (
                <div key={index} className="max-w-screen-xl mx-auto">
                    <div className="border w-full h-[200px] bg-white shadow-xl px-8 py-7 space-y-4">
                        <div className="flex gap-3 items-center">
                            <IoPersonSharp />
                            <p className="text-xl font-semibold">{item?.name}</p>
                        </div>
                        <p className="text-gray-500">{item?.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
