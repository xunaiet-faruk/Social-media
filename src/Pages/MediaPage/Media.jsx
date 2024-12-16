import { useEffect, useState } from 'react';
import useaxios from '../../Component/Hooks/Useaxios';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import Top from '../../Pages/HomePage/Toppost/Top'
import background from '../../../public/16f0e2f8-6a15-49d7-acf1-21e0eb046da9.webp'
const Media = () => {
    const axiosPublic = useaxios();
    const [postData, setPostdata] = useState([]);
    const [likedPosts, setLikedPosts] = useState({});

    // Fetch posts on initial render
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosPublic.get('/post');
                setPostdata(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPost();
    }, [axiosPublic]);

    // Toggle like functionality
    const toggleLike = async (postId) => {
        const post = postData.find((item) => item._id === postId);
        const newLikeCount = likedPosts[postId] ? post.likeCount - 1 : post.likeCount + 1;

        try {

            await axiosPublic.post(`/post/${postId}/like`, { likeCount: newLikeCount });

            setLikedPosts((prevLikedPosts) => ({
                ...prevLikedPosts,
                [postId]: !prevLikedPosts[postId],
            }));

            const updatedResponse = await axiosPublic.get('/post');
            setPostdata(updatedResponse.data);
        } catch (error) {
            console.error("Error updating like count:", error);
        }
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            <img className='object-cover h-[600px] mx-auto w-full' src={background} alt="" />
            <div>
                <h1 className="text-5xl py-20 text-center font-bold">
                    All The <span className="text-[#fb5770]"> Moments </span> Here
                </h1>
            </div>

            <div className='hidden'>
                <Top posts={postData} /> 
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-7 mb-32">
                {postData.map((item) => (
                    <div key={item._id} className="bg-white shadow-xl hover:shadow-red-100 rounded-xl h-[490px]">
                        <div className="flex justify-center items-center p-3">
                            <img className="w-[400px] h-[250px] object-cover rounded-lg" src={item.imageUrl} alt="" />
                        </div>
                        <div className="py-6 px-3 space-y-2">
                            <p className="text-xl font-bold uppercase italic text-gray-500">{item?.name}</p>
                            <p>{item?.details?.split(" ").slice(0, 30).join(" ")}...</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <button
                                className="text-2xl flex items-center px-4"
                                onClick={() => toggleLike(item._id)}
                            >
                                {likedPosts[item._id] ? <AiFillLike className="text-[#fb5770]" /> : <AiOutlineLike />}
                                <span className="ml-2">{item.likeCount}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
