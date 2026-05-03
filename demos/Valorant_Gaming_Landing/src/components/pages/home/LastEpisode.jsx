import { overviewimg } from "../../../assets/index";
import styles from "../../../style";

const LastEpisode = () => (
  <section
    id="overview"
    className="relative flex items-center justify-center h-screen h-full overflow-hidden h-[100vh]"
  >
    <div
      className={`relative flex items-center justify-end flex-col px-[5%] py-[4rem] w-full h-full ${styles.boxWidth}`}
    >
      <div className="relative my-10 sm:ml-4 w-full py-4">
        <div className="my-14">
          <h6 className="font-bold text-[20px] text-left text-secondary tracking-[6px]">
            EPISODE_5 // ACT III / YR 2
          </h6>
          <h1 className="font-bold sm:text-[80px] text-[44px] text-secondary">
            DIMENSION
          </h1>
        </div>
        <button className="btn">
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content text-secondary">ACT-III Overview</span>
          </span>
        </button>
      </div>
    </div>
    <img
      src={overviewimg}
      className="absolute t-0 w-auto h-full min-w-full min-h-full max-w-none z-[-1]"
      alt="overview"
    />
  </section>
);

export default LastEpisode;
