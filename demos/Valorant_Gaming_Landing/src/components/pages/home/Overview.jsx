import { gameovervirewvideo } from "../../../assets";
import styles, { layout } from "../../../style";

const Overview = () => (
  <div className={` bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth} ${styles.paddingY}`}>
      <section id="about" className="relative">
        <div className="relative">
          <h1 className="pt-8 relative">
            <div className="relative md:px-16 md:py-4 p-0 m-0  font-bold md:text-[80px] text-[44px] text-black md:pb-10">
              WE ARE VALORANT
            </div>
          </h1>
          <div className={`relative flex md:flex-row flex-col md:py-8 py-0`}>
            <div className={`${layout.sectionInfo} relative`}>
              <div className="relative md:ml-[16%] m-width-[25%] ml-0 md:mb-8 md:py-0 py-4 md:px-16">
                <h5 className="font-semibold text-black mb-8">
                  DEFY THE LIMITS
                </h5>
                <span className="text-shadow">
                  Blend your style and experience on a global, competitive
                  stage. You have 13 rounds to attack and defend your side using
                  sharp gunplay and tactical abilities. And, with one life
                  per-round, you'll need to think faster than your opponent if
                  you want to survive. Take on foes across Competitive and
                  Unranked modes as well as Deathmatch and Spike Rush.
                </span>
                <div className=" md:flex-start flex md:justify-start justify-center">
                  <button className="btn mt-16">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content text-secondary">
                        LEARN THE GAME
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${layout.sectionImg}`}>
              <video
                autoPlay
                loop
                muted
                className="w-[100%] h-[100%] relative"
              >
                <source
                  src={gameovervirewvideo}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Overview;
