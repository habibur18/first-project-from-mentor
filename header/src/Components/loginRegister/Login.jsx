import React, { useEffect, useRef } from "react";
import Register from "./Register";
const Login = ({ closeModal, openModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);
  return (
    <div
      ref={modalRef}
      className="loginForm w-full  bg-[#262a32] flex justify-center flex-col items-center rounded-lg"
    >
      <div className="flex flex-col justify-center items-center max-w-[600px]  p-2 py-10">
        <div className="p-2 relative">
          <i
            className="fa-solid fa-x text-white text-3xl absolute top-0 right-0 cursor-pointer close-button"
            onClick={() => closeModal()}
          ></i>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://pxflix.com/wp-content/uploads/2023/11/logo1-e1700852046571.png.webp"
              alt=""
            />
            <h1 className="uppercase text-white text-3xl ">Flix</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-center w-3/4 mx-auto">
            <h3 className="font-bold my-5">Login to explore more features</h3>
            <p className="text-[#717986] mb-4">
              Login to continue enjoying Unlimited Movies, TV Shows, Web Series
              and more entertainment videos
            </p>
          </div>
        </div>
        <div className="w-full max-w-md">
          <form className="w-full space-y-3">
            <div className="w-full relative">
              <input
                className="bg-[#1b1f25] text-[#717986] px-4 py-3 outline-none w-full rounded-md"
                type="email"
                name=""
                id="email"
                placeholder="Enter email here..."
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 15 12"
                  className="fill-[#717986]"
                >
                  <path
                    d="M1138.68,475h-12.36a1.354,1.354,0,0,0-1.32,1.385v9.23a1.356,1.356,0,0,0,1.32,1.385h12.36a1.352,1.352,0,0,0,1.32-1.385v-9.23A1.356,1.356,0,0,0,1138.68,475Zm-0.18.923-5.97,6.272-6.03-6.272h12Zm-12.62,9.5v-8.853l4.23,4.408Zm0.62,0.653,4.24-4.448,1.48,1.545a0.424,0.424,0,0,0,.62,0l1.45-1.519,4.21,4.424h-12Zm12.62-.653L1134.91,481l4.21-4.424v8.848Z"
                    transform="translate(-1125 -475)"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="w-full relative">
              <input
                className="bg-[#1b1f25] text-[#717986] w-full py-3 px-4 outline-none"
                type="password"
                name=""
                id="password"
                placeholder="Enter password here..."
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 13 15"
                  className="fill-[#717986]"
                >
                  <path
                    className="cls-1"
                    d="M1136.81,563.551a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1136.81,563.551Zm2.61,1.054a0.583,0.583,0,0,0,.58-0.586v-2.168a2.334,2.334,0,0,0-2.32-2.343h-0.7v-2.067a3.48,3.48,0,0,0-6.96,0v2.067h-0.7a2.334,2.334,0,0,0-2.32,2.343v4.8a2.334,2.334,0,0,0,2.32,2.344h8.36a2.334,2.334,0,0,0,2.32-2.344,0.58,0.58,0,1,0-1.16,0,1.167,1.167,0,0,1-1.16,1.172h-8.36a1.167,1.167,0,0,1-1.16-1.172v-4.8a1.166,1.166,0,0,1,1.16-1.171h8.36a1.166,1.166,0,0,1,1.16,1.171v2.168A0.583,0.583,0,0,0,1139.42,564.605Zm-3.6-5.1h-4.64v-2.067a2.321,2.321,0,0,1,4.64,0v2.067Zm-3.39,4.043a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1132.43,563.551Zm-2.18,0a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1130.25,563.551Zm4.35,0a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1134.6,563.551Z"
                    transform="translate(-1127 -554)"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  style={{ accentColor: "red" }}
                  type="checkbox"
                  name=""
                  id="remember"
                  className="w-4 h-4"
                />
                <label htmlFor="remember" className="text-[#717986]">
                  {" "}
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#717986] hover:text-sky-500 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <input
              type="submit"
              name=""
              id=""
              value="Login Now"
              className="w-1/3 bg-[#ff0065] text-white py-3 rounded-lg hover:bg-[#ff0080] transition-colors"
            />
          </form>
          <div>
            <p className="text-[#717986]">
              Don't have an account?{" "}
              <a
                onClick={() => {
                  openModal(
                    <Register closeModal={closeModal} openModal={openModal} />
                  );
                }}
                href="#"
                className="text-[#ff0065] hover:text-sky-500 transition-colors"
              >
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
