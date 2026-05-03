import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";
import { mapsimg } from "../../../assets";

const Maps = () => (
  <div className={`bg-secondary  ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <section
        id="maps"
        className={`flex md:flex-row flex-col-reverse relative`}
      >
        <div className={`relative flex md:flex-row flex-col`}>
          <div className={`${layout.sectionInfo} relative md:ml-20`}>
            <div className="relative m-width-[25%]">
              <h1 className="pt-8 relative">
                <div className="relative font-bold md:text-[80px] text-[44px] text-secondary text-black leading-[4rem] md:my-10">
                  YOUR MAPS
                </div>
              </h1>
              <h5 className="font-semibold text-secondary mb-8 text-black">
                FIGHT AROUND THE WORLD.
              </h5>
              <span className="text-shadow">
                Each map is a playground to showcase your creative thinking.
                Purpose-built for team strategies, spectacular plays, and clutch
                moments. Make the play others will imitate for years to come.
              </span>
              <div className=" md:flex-start flex md:justify-start justify-center">
                <Link to="/maps">
                  <button className="btn mt-16">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content text-secondary">
                        VIEW ALL MAPS
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`flex ${styles.flexCenter} relative md:w-[60%] w-[100%] h-[100%] translate-x-[100px] objext-fit`}
          >
            <img
              src={mapsimg}
              alt="agents"
              className="w-[100%] h-[100%] relative z-[-1]"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Maps;
