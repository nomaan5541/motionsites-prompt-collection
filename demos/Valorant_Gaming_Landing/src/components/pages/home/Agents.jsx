import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";
import { agentsimg } from "../../../assets";

const Agents = () => (
  <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="agents" className={`${layout.section} relative`}>
        <div
          className={`relative flex md:flex-row-reverse flex-col md:py-8 py-0`}
        >
          <div className={`${layout.sectionInfo} relative md:mr-16`}>
            <div className="relative m-width-[25%]">
              <h1 className="pt-8 relative">
                <div className="relative font-bold md:text-[80px] text-[44px] text-secondary  leading-[4rem] md:my-10">
                  YOUR AGENTS
                </div>
              </h1>
              <h5 className="font-semibold text-secondary mb-8">
                CREATIVITY IS YOUR GREATEST WEAPON.
              </h5>
              <span className="text-white">
                More than guns and bullets, you’ll choose an Agent armed with
                adaptive, swift, and lethal abilities that create opportunities
                to let your gunplay shine. No two Agents play alike, just as no
                two highlight reels will look the same.
              </span>
              <div className=" md:flex-start flex md:justify-start justify-center">
                <Link to="/agents">
                  <button className="btn mt-16 btn--light">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content text-secondary">
                        VIEW ALL AGENTS
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`flex ${styles.flexCenter} relative`}>
            <div
              className={`flex ${styles.flexCenter} relative w-[100%] h-[100%]`}
            >
              <img
                src={agentsimg}
                alt="agents"
                className="w-[100%] h-[100%] relative"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Agents;
