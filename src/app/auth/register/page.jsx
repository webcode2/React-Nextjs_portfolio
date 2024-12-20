import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-[80vh] lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-x-20">
          <div className="text-center w-full lg:text-left py-10">
            <h1 className="text-4xl lg:text-5xl font-bold">Register with Us</h1>
            <p className="mt-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p  className="label-text-alt link link-hover">
                    Already had an account? 
                     <Link href={"s"}> Sign In</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
