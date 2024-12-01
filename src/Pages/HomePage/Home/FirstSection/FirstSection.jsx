import SectionForm from "./SectionForm";


const FirstSection = () => {
    return (
        <div 
        
            className="h-[500px]  bg-cover bg-center bg-no-repeat mb-72"
            style={{

                backgroundImage: `url('https://demo.xperthemes.com/sociohub/wp-content/uploads/sites/10/2024/07/color-bg.png')`,

            }}
        >

                <div className="max-w-screen-xl mx-auto">
                  <div className="flex gap-32">
                    <div className="">
                        <img src="https://demo.stairthemes.com/sociable/wp-content/uploads/sites/14/2023/04/img1.png" alt="" />
                    </div>
                    <div>
                        <SectionForm />
                    </div>
                  </div>
                </div>
            
        </div>
    );
};

export default FirstSection;