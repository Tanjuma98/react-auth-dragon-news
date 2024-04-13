import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto my-6">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;