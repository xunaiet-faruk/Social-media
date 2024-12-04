import { useEffect, useState } from 'react';
import useaxios from '../../Component/Hooks/Useaxios';
import Top from '../HomePage/Toppost/Top';


const Media = () => {
    const axiosPublic = useaxios();
    const [postData, setPostdata] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosPublic.get('/post');
                setPostdata(response.data || []); // Ensure it's an array
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPost();
    }, [axiosPublic]);

    // Get top 3 posts with the most likes
    const topPosts = postData
        .sort((a, b) => b.likeCount - a.likeCount) // Sort by like count descending
        .slice(0, 3); // Get the top 3 posts

    console.log("Top Posts:", topPosts); // Check if topPosts is being populated correctly

    return (
        <div>
            <div>
                <h1 className="text-5xl py-20 text-center font-bold">
                    All the <span className="text-[#fb5770]"> Moments </span> All in One Place
                </h1>
            </div>

            {/* Conditionally render Top only when topPosts is available */}
            {topPosts.length > 0 ? <Top topPosts={topPosts} /> : <p>No top posts available.</p>}

            {/* Post Data */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-7 mb-32">
                {postData.map((item) => (
                    <div key={item._id} className="bg-white shadow-xl hover:shadow-red-100 rounded-xl h-[490px]">
                        <div className="flex justify-center items-center p-3">
                            <img className="w-[400px] h-[250px] object-cover rounded-lg" src={item.imageUrl} alt="" />
                        </div>
                        <div className="py-6 px-3 space-y-2">
                            <p className="text-xl font-bold uppercase italic text-gray-500">{item?.name}</p>
                            <p>{item?.details}</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className="text-2xl flex items-center px-4">
                                <span className="text-xl text-gray-600">{item.likeCount || 0}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
