import image from '../../../../../public/hero_image@2x.png'
const Banner = () => {
    return (
        <div
            className="h-[500px]  bg-cover bg-center bg-no-repeat mb-72"
            style={{
               
                backgroundImage: `url('https://demo.xperthemes.com/sociohub/wp-content/uploads/sites/10/2024/07/color-bg.png')`,
                
            }}
        >
        

           

            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-center gap-12 pt-20 items-center ">
                    <div className='flex-1'>
                    <div className='space-y-9'>
                            <h1 className="text-7xl font-bold">Creative <span className="text-[#fb5770]"> Pro</span> Social Manager</h1>
                            <p className="text-xl text-gray-600 font-semibold">Torquent optio curae aute, dicta suspendisse eligendi natus! Aliquet accumsan nostrud laborum magnam. Quia nunc explicabo quibusdam eiusmod alias nostra congue wisi.Quisquam proident voluptas.</p>

                    </div>

                    <div className='flex gap-12 py-7'>
                            <img className='' src="https://demo.stairthemes.com/sociable/wp-content/uploads/sites/14/2023/04/img_10.png" alt="" />
                            <img src="https://demo.stairthemes.com/sociable/wp-content/uploads/sites/14/2023/04/img_11.png" alt="" />
                            <img src="	https://demo.stairthemes.com/sociable/wp-content/uploads/sites/14/2023/04/img_13.png" alt="" />
                            <img src="https://demo.stairthemes.com/sociable/wp-content/uploads/sites/14/2023/04/img_10.png" alt="" />
                    </div>

                    <div className='flex gap-6 py-6'>
                                <button className='px-12 py-3 rounded-md bg-[#fb5770] text-white cursor-pointer'>Get Start Now </button>
                                <button className='px-12 py-3 rounded-md border-2 hover:bg-[#fb5770] hover:text-white cursor-pointer'>Learn More </button>
                    </div>

                    </div>
                    <div className='flex-1'>
                        <img  className='w-full' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
   
    );
};

export default Banner;
