import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
            }).catch(error => {
                console.log(error.message);
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row-reverse w-[85%]">
                <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold mb-12 text-center">Sign Up!</h1>

                </div>
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                minLength: 6,
                                maxLength: 20,
                                required: true,
                                pattern: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p role="alert">Password is must 6 or more character long </p>}
                            {errors.password?.type === 'pattern' && <p role="alert">Password must contains one number, one small and capital letter and a special character </p>}



                        </div>


                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </div>
                    </form>
                    <p className="px-12 pb-8"><small >Already have an account? <Link className="text-primary" to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;