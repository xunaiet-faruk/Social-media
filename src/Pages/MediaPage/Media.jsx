import banner from '../../../public/16f0e2f8-6a15-49d7-acf1-21e0eb046da9.webp'

const Media = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="max-w-screen-xl mx-auto">
                        <img
                            className="w-full h-[580px] object-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                </div>

                <div>
                    <h1 className="text-5xl py-20 text-center font-bold">All the <span className="text-[#fb5770]"> Moments </span> All in One Place</h1>
                </div>

            </div>


        </div>
    );
};

export default Media;