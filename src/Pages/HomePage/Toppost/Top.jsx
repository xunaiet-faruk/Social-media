import { useEffect, useState } from 'react';

const Top = ({ topPosts }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (topPosts && topPosts.length > 0) {
            setPosts(topPosts); // Set the posts when topPosts is available
        }
    }, [topPosts]); // This will run every time topPosts changes

    console.log("hellow", posts); // This will log posts after the data is set

    if (!posts || posts.length === 0) {
        return <div>Loading top posts...</div>; // Show a loading message or fallback UI
    }

    return (
        <div>
            <div>
                <h1 className="text-5xl py-20 text-center font-bold">
                    Our Top <span className="text-[#fb5770]"> Post  </span>
                </h1>
            </div>

            {/* Render top posts if available */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-7 mb-32">
                {posts.map((item) => (
                    <div key={item._id} className="bg-white shadow-xl hover:shadow-red-100 rounded-xl h-[490px]">
                        <div className="flex justify-center items-center p-3">
                            <img className="w-[400px] h-[250px] object-cover rounded-lg" src={item.imageUrl} alt="" />
                        </div>
                        <div className="py-6 px-3 space-y-2">
                            <p className="text-xl font-bold uppercase italic text-gray-500">{item?.name}</p>
                            <p>{item?.details}</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <span className="text-2xl flex items-center px-4">
                                <span className="text-xl text-gray-600">{item.likeCount || 0}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Top;
