import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div>

          <footer className="">
                <div className="max-w-screen-xl mx-auto py-12   px-12 border-t-2 border-gray-200 shadow-xl bg-slate-50 h-[250px]">
              

                    <div className="flex justify-between items-center">
                        <div>
                            <img src="https://demo.xperthemes.com/sociohub/wp-content/uploads/sites/10/2024/07/sociohub-logo.png" alt="" />

                        </div>


                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500  transition rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#fb5770] hover:text-white"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#fb5770] hover:text-white transition"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500 rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#fb5770] hover:text-white transition"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="text-2xl" />
                            </a>
                        </div>
              </div>

                    <div className="py-12">
                        <ul className="text-lg font-semibold flex gap-12 justify-center items-center">
                            <li className="hover:text-[#fb5770] cursor-pointer">Home</li>
                            <li className="hover:text-[#fb5770] cursor-pointer">Message</li>
                            <li className="hover:text-[#fb5770] cursor-pointer">Media</li>
                            <li className="hover:text-[#fb5770] cursor-pointer">About</li>
                        </ul>
                    </div>

          
            </div>

                <aside className=" py-5 text-center text-sm  bg-[#fb5770] text-white w-[1280px] mx-auto">
                    <p>&copy; 2024 Xunaiet. All Rights Reserved.</p>
                </aside>

                
          </footer>
            
        </div>
    );
};

export default Footer;