import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { logInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form, form.get('email'), form.get('password'));
        const email = form.get('email');
        const password = form.get('password');

        logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.log(error);
            })
        e.target.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 p-10 rounded-lg mt-8">
                <h2 className="text-3xl text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-sm text-center mt-5">Dont have an account? <Link to={'/register'} className="font-bold text-blue-600 hover:underline">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;