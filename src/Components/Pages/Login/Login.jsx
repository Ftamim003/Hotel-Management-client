import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {setUser,userLogin,googleSignIn}=useContext(AuthContext);
    const [error, setError] = useState({});
    const [email, setEmail] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        //const email = e.target.email.value;
        const password = e.target.password.value

        userLogin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                //toast.success(`Welcome, ${user.displayName || "User"}!`);
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(() => {
                navigate(location?.state ? location.state : "/");
            })
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                <h2 className="text-center text-2xl font-semibold ">Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-sm text-red-600">
                                    {error.login}
                                </label>
                            )
                        }
                        <Link
                            to="/auth/forgetPassword"
                            state={{ email}}
                            className="label"
                        >
                            <span className="label-text-alt link link-hover">Forgot password?</span>
                        </Link>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold"> Dont have an account? <Link className="text-red-500" to='/auth/signUp'>Register</Link></p>
                <div className="*:w-full mt-5">
                    <button onClick={handleGoogleSignIn} className="btn text-blue-600">
                        Login with Google
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Login;Login