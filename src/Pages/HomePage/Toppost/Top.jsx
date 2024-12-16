import { useState, useEffect } from 'react';
import useaxios from '../../../Component/Hooks/Useaxios';
import { Link } from 'react-router-dom';


const Top = () => {
    const axiosPublic = useaxios();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosPublic.get('/post');
                const topPosts = response.data.sort((a, b) => b.likeCount - a.likeCount).slice(0, 3);
                setPosts(topPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, [axiosPublic]);

    return (
        <div>
            <div>
                <h1 className="text-5xl py-20 text-center font-bold">
                    Our Top <span className="text-[#fb5770]"> Post  </span>
                </h1>
            </div>

            {/* Render top posts if available */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-7 mb-32">
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((item) => (
                        <div key={item._id} className=" shadow-2xl hover:shadow-red-100 rounded-xl h-[470px] flex flex-col">
                            <div className="flex justify-center items-center p-3">
                                <img className="w-[400px] h-[250px] object-cover rounded-lg" src={item.imageUrl} alt="" />
                            </div>
                            <div className="py-6 px-3 space-y-2 flex-grow">
                                <p className="text-xl font-bold uppercase italic text-gray-500">{item?.name}</p>
                                <p>{item?.details?.split(" ").slice(0, 20).join(" ")}...</p>
                            </div>
                        
                            <div className="flex justify-end items-end pb-5">
                                <Link to={`/mediaDetails/${item._id}`}>
                               
                                    <button
                                        className="relative inline-block hover:rounded-md h-9 w-[130px] overflow-hidden border-[#fb5770] px-5 py-2 text-black shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#fb5770] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#fb5770] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                                    >
                                        Details
                                    </button>
                               
                               </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No posts available</p>
                )}
            </div>
        
        </div>
    );
};

export default Top;
