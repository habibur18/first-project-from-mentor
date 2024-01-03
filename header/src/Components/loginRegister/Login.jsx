import React from "react";
const Login = () => {
  return (
    <div className="bg-[#262a32] flex justify-center flex-col items-center">
      <div className="">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://pxflix.com/wp-content/uploads/2023/11/logo1-e1700852046571.png.webp"
            alt=""
          />
          <h1 className="uppercase text-white text-3xl ">Flix</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h3>Login to explore more features</h3>
          <p className="text-[#717986]">
            Login to continue enjoying Unlimited Movies, TV Shows, Web Series
            and more entertainment videos
          </p>
        </div>
      </div>
      <div>
        <form className="border w-full">
          <div className="border w-full">
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter email here..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="12"
              viewBox="0 0 15 12"
            >
              <path
                d="M1138.68,475h-12.36a1.354,1.354,0,0,0-1.32,1.385v9.23a1.356,1.356,0,0,0,1.32,1.385h12.36a1.352,1.352,0,0,0,1.32-1.385v-9.23A1.356,1.356,0,0,0,1138.68,475Zm-0.18.923-5.97,6.272-6.03-6.272h12Zm-12.62,9.5v-8.853l4.23,4.408Zm0.62,0.653,4.24-4.448,1.48,1.545a0.424,0.424,0,0,0,.62,0l1.45-1.519,4.21,4.424h-12Zm12.62-.653L1134.91,481l4.21-4.424v8.848Z"
                transform="translate(-1125 -475)"
              ></path>
            </svg>
          </div>
          <div className="flex">
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter password here..."
            />
            <span className="mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                viewBox="0 0 13 15"
              >
                <path
                  className="cls-1"
                  d="M1136.81,563.551a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1136.81,563.551Zm2.61,1.054a0.583,0.583,0,0,0,.58-0.586v-2.168a2.334,2.334,0,0,0-2.32-2.343h-0.7v-2.067a3.48,3.48,0,0,0-6.96,0v2.067h-0.7a2.334,2.334,0,0,0-2.32,2.343v4.8a2.334,2.334,0,0,0,2.32,2.344h8.36a2.334,2.334,0,0,0,2.32-2.344,0.58,0.58,0,1,0-1.16,0,1.167,1.167,0,0,1-1.16,1.172h-8.36a1.167,1.167,0,0,1-1.16-1.172v-4.8a1.166,1.166,0,0,1,1.16-1.171h8.36a1.166,1.166,0,0,1,1.16,1.171v2.168A0.583,0.583,0,0,0,1139.42,564.605Zm-3.6-5.1h-4.64v-2.067a2.321,2.321,0,0,1,4.64,0v2.067Zm-3.39,4.043a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1132.43,563.551Zm-2.18,0a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1130.25,563.551Zm4.35,0a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1134.6,563.551Z"
                  transform="translate(-1127 -554)"
                ></path>
              </svg>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
