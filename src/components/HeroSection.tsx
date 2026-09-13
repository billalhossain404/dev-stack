import heroSection from "../assets/banner-stack.png";
const HeroSection = () => {
    return (
        <div className="flex px-25 items-center justify-between">
            <div>
                <h1 className="font-bold text-6xl pb-8">Build Your Ideal <br /><span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Development Stack
                </span></h1>
                <p className="text-gray-500 text-xl">
                    Explore frontend, backend, database, and tooling options, <br /> compare them
                    side by side, and put together the stack that fits your <br /> next project.
                </p>
                <div className="mt-10 flex gap-5">
                    <button className="btn border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
                        Explore Technologies
                    </button>
                    <button className="btn text-gray-600 w-45">Learn More</button>
                </div>
            </div>
            <div>
                <img src={heroSection} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;
