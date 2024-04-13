import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div className="space-y-3">
            <div className="p-4 space-y-3">
                <p className="font-semibold">Login With</p>
                <button className="btn btn-primary btn-outline w-full"><FaGoogle></FaGoogle> Google</button>
                <button className="btn btn-info btn-outline w-full"><FaGithub></FaGithub> Github</button>
            </div>
            <div className="p-4">
                <p className="font-semibold mb-3">Find Us On</p>
                <a className="border rounded-t-lg flex items-center gap-2 p-4 w-full"><FaFacebook className="text-lg"></FaFacebook> Facebook</a>
                <a className="border-x flex items-center gap-2 p-4 w-full"><FaTwitter className="text-lg"></FaTwitter> Twitter</a>
                <a className="border rounded-b-lg flex items-center gap-2 p-4 w-full"><FaInstagram className="text-lg"></FaInstagram> Instagram</a>
            </div>
            <div className="p-4 space-y-3 bg-base-200 rounded-md">
                <p className="font-semibold">Q Zone</p>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;