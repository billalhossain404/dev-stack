import logo from "../assets/logo-text.png";
const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto flex  justify-between px-25 items-center pt-4 pb-4">

                <img className="" src={logo} alt="" />
                <div className="flex justify-center">
                    <ul className="flex justify-center items-center gap-4 text-[#475569]">
                        <li className="text-pink-700 font-semibold">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="gap-4">
                    <button className="btn rounded-4xl border-none text-[#334155]">Sign in</button>
                    <button className="btn btn-secondary rounded-4xl">Sign up</button>
                </div>
            </div>
        </nav>

    );
};

export default Nav;
