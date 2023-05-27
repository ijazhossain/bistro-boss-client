
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const LogIn = () => {
    const { user, logIn } = useContext(AuthContext);
    console.log(user);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);

            }).catch(error => {
                console.log(error.message);
            })
    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
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
                            <input type="text" ref={captchaRef} name="password" placeholder="Type the text above" className="input input-bordered" />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs ">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className="px-12 pb-8"><small>New to Bistro! <Link className="text-primary" to="/register">Sign up</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;