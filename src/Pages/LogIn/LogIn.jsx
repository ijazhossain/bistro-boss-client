import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogIn from '../../components/SocialLogin/SocialLogIn';
const LogIn = () => {
    const { logIn } = useContext(AuthContext);

    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'User login successful!',

                })
                form.reset()
                navigate(from, { replace: true });

            }).catch(error => {
                console.log(error.message);
            })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row-reverse w-[85%]">
                <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold mb-12 text-center">Login now!</h1>

                </div>
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" />

                        </div>
                        {/* Todo remove disabled  */}
                        <div className="form-control mt-6">
                            <input disabled={false} type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className="px-12 pb-8"><small>New to Bistro! <Link className="text-primary" to="/register">Sign up</Link></small></p>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default LogIn;