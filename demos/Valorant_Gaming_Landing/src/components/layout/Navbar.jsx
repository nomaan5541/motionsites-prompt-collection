import React from "react";
import { useState } from "react";
import { close, valorantlogo, menu, riotlogo } from "../../assets";
import { navLinks } from "../../constants";
import styles from "../../style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar h-[80px]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div
          className={`w-full flex justify-between items-center ${styles.boxWidth}`}
        >
          <div className={`${styles.flexCenter} h-[80px]`}>
            <Link to="/">
              <div className={`${styles.flexCenter} h-[80px] sm:ml-4 ml-10`}>
                <img
                  src={valorantlogo}
                  alt="valorant"
                  className="relative w-[38px] h-[26px]"
                />
              </div>
            </Link>
          </div>

          <div className="flex h-[80px]">
            <ul className="list-none md:flex hidden justify-end items-center ml-10">
              {navLinks.map((navLink, index) => (
                <li
                  key={navLink.id}
                  className={`font-poppins font-normal relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase ${
                    index === navLinks.length - 1 ? "mr-0" : "mr-6"
                  } text-white`}
                >
                  {navLink.id.length > 1 && navLink.id[1] === "#" ? (
                    <a href={`${navLink.id}`} className=" h-[80px]">
                      {navLink.title}
                    </a>
                  ) : (
                    <Link to={`${navLink.id}`} className=" h-[80px]">
                      {navLink.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-4">
            <div className="flex justify-end items-center">
              <div id="navbutton" className="md:flex hidden">
                PLAY NOW
              </div>
              <div className="md:hidden  block bg-[gray]/40 rounded-full w-[48px] h-[48px] p-2">
                <img
                  src={menu}
                  alt="menu"
                  className="w-[100%] h-[100%] object-contain"
                  onClick={() => setToggle((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="h-[100vh] w-[100%] bg-[#000]/50 fixed top-0 left-0 block md:hidden z-[1]">
          <div
            className={`flex-col bg-black absolute top-0 right-0 w-[100%] sm:w-[500px] sidebar block h-full`}
          >
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div
                className={`w-full flex justify-between items-center ${styles.boxWidth}`}
              >
                <div className={`${styles.flexCenter} h-[80px]`}>
                  <Link to="/">
                    <div
                      className={`${styles.flexCenter} h-[80px] md:ml-4 ml-10`}
                    >
                      <img
                        src={valorantlogo}
                        alt="valorant"
                        className="relative w-[38px] h-[26px]"
                      />
                    </div>
                  </Link>
                </div>
                <div className="md:hidden  block bg-[gray]/40 rounded-full w-[48px] h-[48px] p-2 mr-4">
                  <img
                    src={close}
                    alt="menu"
                    className="w-[100%] h-[100%] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                  />
                </div>
              </div>
            </div>
            <div className="flex-col p-10 bg-[#292929] h-full">
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                {navLinks.map((navLink, index) => (
                  <li
                    key={navLink.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white my-2 flex justify-end`}
                  >
                    <a
                      href={`${navLink.id}`}
                      className="uppercase font-semibold p-4"
                    >
                      {navLink.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="text-center font-semibold mt-8 p-4 flex justify-center bg-primary rounded-[12px] cursor-pointer">
                <div className="text-[16px]">PLAY NOW</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
