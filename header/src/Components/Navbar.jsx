import { useEffect, useState } from "react";
// import styles from "./Navbar.css
import "./Navbar.css";
import Modal from "./Modal/Modal";
import Login from "./loginRegister/Login";
import Register from "./loginRegister/Register";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Free Movies", link: "/free-movies" },
    { name: "Free Web Series", link: "/free-web-series" },
    { name: "Free Tv Shows", link: "/free-tv-shows" },
    { name: "Movie Hub", link: "/movie-hub" },
    { name: "Account", link: "/account" },
  ];
  const handleMenuClick = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = () => {
    setMenuOpen(false);
  };

  const openModal = (component) => {
    setCurrentComponent(component);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidebar = document.getElementById("sidebar");

      if (sidebar && !sidebar.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-[#212529]">
      <div className="flex items-center justify-between lg:px-5 xl:px-18 2xl:px-40  py-5 px-2">
        <div className="flex items-center gap-3">
          <img
            src="https://pxflix.com/wp-content/uploads/2023/11/logo1-e1700852046571.png.webp"
            alt=""
          />
          <a href="/" className="text-3xl text-white">
            Flix
          </a>
        </div>
        <div className="flex items-center gap-3">
          <ul className="flex gap-7 hidden xl:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="underline-text text-2xl text-white hover:text-[#ff0065] duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <ul className="flex gap-3">
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(
                      <Login closeModal={closeModal} openModal={openModal} />
                    );
                  }}
                  href=""
                  className="bg-[#ff0065] px-6 py-2 text-[white] rounded-md"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(
                      <Register closeModal={closeModal} openModal={openModal} />
                    );
                  }}
                  href="/"
                  className="bg-[#ff0065] px-6 py-2 text-white rounded-md"
                >
                  Register
                </a>
              </li>
            </ul>
            <Modal open={isOpen} closeModal={closeModal}>
              {currentComponent}
            </Modal>
          </div>
          <div className="xl:hidden pr-5">
            {/* menu icon */}
            {menuOpen ? (
              // <FontAwesomeIcon
              //   onClick={(e) => handleMenuClick(e)}
              //   icon={faX}
              //   className="text-white text-3xl"
              // />
              <i
                className="fa-solid fa-x text-white text-3xl"
                onClick={handleMenuClick}
              ></i>
            ) : (
              // <FontAwesomeIcon
              //   onClick={(e) => handleMenuClick(e)}
              //   icon={faBars}
              //   className="text-white text-3xl"
              // />
              <i
                className="fa-solid fa-bars text-white text-3xl"
                onClick={handleMenuClick}
              ></i>
            )}
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed xl:hidden transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none min-h-0 min-w-0"
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 lg:w-1/5 bg-[#212529]  transition-transform duration-[1000ms] ${
            menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          {/* <FontAwesomeIcon
            onClick={handleMenuClick}
            icon={faX}
            className="cursor-pointer bg-[#ff0065] rounded-full px-3 py-3  text-white absolute top-5 -right-3"
          /> */}
          <i
            className="fa-solid fa-x text-white my-2 hover:bg-[#D32F8F] duration-300 absolute top-0 right-0 cursor-pointer px-3 py-3 bg-[#ff0065] rounded-full"
            onClick={handleMenuClick}
          ></i>
          <div className="p-8 my-12 lg:p-8">
            <ul className="flex flex-col gap-4 ">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-white hover:text-[#ff0065] text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
