import { useParams } from "react-router-dom";
import useaxios from "../../Component/Hooks/Useaxios";
import { useEffect, useState } from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";


const Mediadetails = () => {

    const {id} =useParams();
    const axiosPublic =useaxios();
    const [post, setPost] = useState(null);

    useEffect(()=>{

        const fetchPostdetails  =async()=>{
            try {
                const response =await axiosPublic.get(`/post/${id}`)
                setPost(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
          
        }
        fetchPostdetails();

    },[axiosPublic,id])

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
                                <p className="text-md">{post?.details}  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere, aut animi quasi ut ipsa unde ad placeat vitae adipisci doloremque nostrum architecto dicta necessitatibus? Corrupti pariatur sapiente quae ipsa! sit amet consectetur adipisicing elit. Tempora harum odio excepturi debitis quia nam ab, facere adipisci beatae veritatis, quae temporibus! Sapiente ab at, nam in aliquam necessitatibus inventore?</p>
                           
                                <div className="flex gap-10">
                                    <FaRegHeart className="text-2xl cursor-pointer hover:text-red-500"/>
                                    <FaRegComment className="text-2xl cursor-pointer hover:text-red-500"/>

                                </div>
                            </div>
                          

                        </div>

                       

                        </div>
                ) : (
                    <p>Loading post details...</p>
                )}
            </div>
        </div>
    );
};

export default Mediadetails;