import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";

const Register = ({ closeModal, openModal }) => {
  const [selectedGender, setSelectedGender] = useState("male");
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const genders = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];
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
      className="w-full  bg-[#262a32] flex justify-center flex-col items-center rounded-lg px-4 py-10"
    >
      <div className="relative">
        <FontAwesomeIcon
          icon={faX}
          onClick={() => closeModal()}
          className="text-white absolute top-0 right-0 cursor-pointer close-button"
        />
        <div className="flex items-center justify-center">
          <img
            src="https://pxflix.com/wp-content/uploads/2023/11/logo1-e1700852046571.png.webp"
            alt=""
          />
          <h3 className="text-white text-3xl my-5">FLIX</h3>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5">
          <h3 className="text-white text-2xl">
            Register to explore more features
          </h3>
          <p className="text-white text-center">
            Register to continue enjoying Unlimited Movies, TV Shows, Web Series
            and more entertainment videos
          </p>
        </div>
        <form className="my-5">
          <div>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-[#1b1f25] outline-none text-[#717986] border-[#2d323a] px-6 py-3 rounded-lg mb-5 text-xl"
                placeholder="Enter Your Name"
              />
              <span className="absolute top-[20%] right-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 14 13.969"
                  className="fill-[#717986]"
                >
                  <path
                    id="User"
                    className="cls-1"
                    d="M1739.98,99.584a6.835,6.835,0,0,0-2.26-4.576,9.205,9.205,0,0,0-.84-0.654l-0.21-.157a4.542,4.542,0,0,0-.75-6.127,4.533,4.533,0,0,0-5.83-.016,4.587,4.587,0,0,0-1.59,2.922,4.494,4.494,0,0,0,.83,3.234,6.96,6.96,0,0,0-3.33,5.95,0.826,0.826,0,0,0,.28.635,0.848,0.848,0,0,0,.54.206,0.889,0.889,0,0,0,.32-0.064,0.783,0.783,0,0,0,.51-0.679c0.01-.121.02-0.244,0.02-0.362,0.02-.2.03-0.387,0.06-0.571a5.244,5.244,0,0,1,2.91-3.926,4.5,4.5,0,0,0,4.73,0,5.2,5.2,0,0,1,2.82,3.53,6.426,6.426,0,0,1,.12.905c0.01,0.14.03,0.285,0.04,0.428a0.836,0.836,0,0,0,.85.743,0.814,0.814,0,0,0,.8-0.818C1740,99.987,1739.99,99.786,1739.98,99.584Zm-4.11-8.047A2.872,2.872,0,0,1,1733,94.4a2.871,2.871,0,0,1-2.87-2.878,2.873,2.873,0,0,1,2.87-2.866h0A2.872,2.872,0,0,1,1735.87,91.536Z"
                    transform="translate(-1726 -87.031)"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-[#1b1f25] outline-none text-[#717986] border-[#2d323a] px-6 py-3 rounded-lg mb-5 text-xl"
                placeholder="Enter Your Email"
              />
              <span className="absolute top-[20%] right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 15 12"
                  className="fill-[#717986]"
                >
                  <path
                    className="cls-1"
                    d="M1138.68,475h-12.36a1.354,1.354,0,0,0-1.32,1.385v9.23a1.356,1.356,0,0,0,1.32,1.385h12.36a1.352,1.352,0,0,0,1.32-1.385v-9.23A1.356,1.356,0,0,0,1138.68,475Zm-0.18.923-5.97,6.272-6.03-6.272h12Zm-12.62,9.5v-8.853l4.23,4.408Zm0.62,0.653,4.24-4.448,1.48,1.545a0.424,0.424,0,0,0,.62,0l1.45-1.519,4.21,4.424h-12Zm12.62-.653L1134.91,481l4.21-4.424v8.848Z"
                    transform="translate(-1125 -475)"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full bg-[#1b1f25] outline-none text-[#717986] border-[#2d323a] px-6 py-3 rounded-lg mb-5 text-xl"
                placeholder="Enter Password"
              />
              <span className="absolute top-[20%] right-2">
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
            <div className="relative">
              <input
                type="password"
                className="w-full bg-[#1b1f25] outline-none text-[#717986] border-[#2d323a] px-6 py-3 rounded-lg mb-5 text-xl"
                placeholder="Confirm Password"
              />
              <span className="absolute top-[20%] right-2">
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
          </div>
          <div className="flex gap-6 text-white items-center">
            <h4 className="text-xl font-semibold">Select gender type</h4>
            {genders.map((gender) => {
              return (
                <div key={gender.label} className={`flex mt-2 gap-2`}>
                  <input
                    style={{ accentColor: "red" }}
                    type="radio"
                    id={gender.value}
                    name="gender"
                    className=""
                    value={gender.value}
                    checked={selectedGender === gender.value}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={gender.value}
                    className={`${
                      selectedGender === gender.value
                        ? "text-red-500 duration-300"
                        : ""
                    }`}
                  >
                    {gender.label}
                  </label>
                </div>
              );
            })}
          </div>
          <input
            type="submit"
            name=""
            id=""
            value="Login Now"
            className="w-1/3 bg-[#ff0065] text-white py-3 rounded-lg hover:bg-[#ff0080] transition-colors my-5"
          />
          <div>
            <p className="text-[#717986]">
              Don't have an account?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  openModal(<Login />);
                }}
                href="#"
                className="text-[#ff0065] hover:text-sky-500 transition-colors"
              >
                Login Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
