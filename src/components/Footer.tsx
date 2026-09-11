import flogo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className="px-25">


            <div className="flex">
                <div className="w-[45%]">
                    <img src={flogo} alt="" />
                    <p className="mt-3 mb-6 text-[#64748B]">Curated tools, technologies, and resources for developers building <br /> modern software.</p>
                    <div className="flex gap-4 text-[#475569] font-medium">
                        <button>GitHub</button>
                        <button>Twitter</button>
                        <button>LinkedIn</button>
                    </div>
                </div>

                 <div className="w-[55%]">
        <table className="w-full">
            <thead>
                <tr>
                    <th className="text-left pb-4">PRODUCT</th>
                    <th className="text-left pb-4">COMPANY</th>
                    <th className="text-left pb-4">LEGAL</th>
                </tr>
            </thead>

            <tbody className="text-[#64748B]">
                <tr>
                    <td className="pb-3">Home</td>
                    <td className="pb-3">About</td>
                    <td className="pb-3">Privacy Policy</td>
                </tr>

                <tr>
                    <td className="pb-3">Technologies</td>
                    <td className="pb-3">Contact</td>
                    <td className="pb-3">Terms of Service</td>
                </tr>

                <tr>
                    <td>Projects</td>
                    <td>Careers</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
                </div>

            </div>

              <hr className="text-gray-100 mb-8 mt-20" />

            <div className="flex justify-between mb-10 text-[#94A3B8]">
                <p>&copy; 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-4">
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;