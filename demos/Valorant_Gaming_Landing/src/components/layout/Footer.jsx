import { socialMedia } from "../../constants";
import { riotlogogray } from "../../assets";
import styles from "../../style";

const Footer = () => (
  <div className="pb-8 bg-[#0f1923]">
    <ul className="py-4 flex flex-row items-center justify-center">
      {socialMedia.map((social) => (
        <li key={social.id} className="m-2 p-3 cursor-pointer bg-[#292929] rounded-[10px]">
          <a href={social.link} target="_blank">
            <img src={social.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
    <div className="flex justify-center align-center p-8">
      <ul className="flex sm:flex-row flex-col justify-center align-center">
        <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase mr-6 text-white">
          <a href="#">PRIVACY NOTICE</a>
        </li>
        <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase mr-6 text-white">
          <a href="#">TERMS OF SERVICE</a>
        </li>
        <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase mr-6 text-white">
          <a href="#">COOKIE PREFERENCES</a>
        </li>
      </ul>
    </div>
    <div className={`py-4 ${styles.flexCenter}`}>
      <a href="#">
        <img src={riotlogogray} alt="riot" />
      </a>
    </div>
    <div className="mx-auto text-center max-w-[640px]">
      <p className="mx-auto text-[#7e7e7e] text-[13px]">
        © 2022 Riot Games, Inc. Riot Games, VALORANT, and any associated logos
        are trademarks, service marks, and/or registered trademarks of Riot
        Games, Inc.
      </p>
    </div>
  </div>
);

export default Footer;
