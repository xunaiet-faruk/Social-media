import { useParams } from "react-router-dom";
import useaxios from "../../Component/Hooks/Useaxios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import Comments from "./Comments";

const Mediadetails = () => {
    const { id } = useParams();
    const axiosPublic = useaxios();
    const [post, setPost] = useState(null);
    const [love, setLove] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [comments, setComments] = useState([]);

    const LoveButton = () => {
        setLove(!love);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const comment = form.comment.value;
        const commentInfo = { name, comment, postId: post._id };

        axiosPublic.post('/comment', commentInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Successfully Added Comment",
                        icon: "success",
                        draggable: true,
                    });

                    form.reset();
                    setOpenModal(false);

                    // Add the new comment to the state
                    setComments([...comments, commentInfo]);
                }
            })
            .catch(error => {
                console.error("Error adding comment:", error);
            });
    };

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axiosPublic.get(`/post/${id}`);
                setPost(response.data);

                // Fetch comments for the post
                const commentsResponse = await axiosPublic.get(`/comment/${id}`);
                setComments(commentsResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPostDetails();
    }, [axiosPublic, id]);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                {post ? (
                    <div className="py-32">
                        <div className="flex gap-12">
                            <div className="flex-1">
                                <img className="w-[800px] rounded-xl h-full" src={post.imageUrl} alt="" />
                            </div>
                            <div className="space-y-5 flex-1">
                                <p className="text-2xl font-bold text-gray-500">{post?.name}</p>
                                <p className="text-md">{post?.details}</p>
                                <div className="flex gap-10">
                                    <div onClick={LoveButton}>
                                        {love ? <FaHeart className="text-2xl cursor-pointer" /> : <FaRegHeart className="text-2xl cursor-pointer" />}
                                    </div>
                                    <FaRegComment onClick={() => setOpenModal(true)} className="text-2xl cursor-pointer hover:text-red-500" />
                                    <div className="mx-auto w-fit">
                                        <div onClick={() => setOpenModal(false)} className={`fixed z-[100] w-screen ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                                            <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                                                <svg onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></svg>
                                                <form onSubmit={handleSubmit} className="">
                                                    <div className="my-12 space-y-6">
                                                        <input type="text" id="" className="border-b border-[#fb5770] w-full py-2" name="name" placeholder="Enter Name" />
                                                        <textarea type="text" id="" className="border-b border-[#fb5770] w-full py-8" name="comment" placeholder="Enter Comment" />
                                                    </div>
                                                    <div className="flex justify-end gap-2">
                                                        <button type="submit" className="rounded-md bg-[#fb5770] px-6 py-[6px] text-white hover:bg-[#c33449]">
                                                            ADD COMMENT
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading post details...</p>
                )}
            </div>
            <Comments comments={comments} />
        </div>
    );
};

export default Mediadetails;
