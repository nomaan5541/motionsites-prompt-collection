import styles, { layout } from "../../../style";
import { news } from "../../../constants";
import NewsCard from "../../utils/NewsCard";

const News = () => (
  <div className={` bg-secondary ${styles.paddingX} ${styles.flexStart} `}>
    <div className={`${styles.boxWidth} sm:py-6 py-4`}>
      <section id="news" className="mx-4">
        <h1 className="relative text-primary font-bold md:text-[80px] text-[44px] text-black">
          THE LATEST
        </h1>
        <div className="all-news flex flex-row overflow-x-scroll">
          {news.map((newsItem) => (
            <NewsCard
              key={newsItem.id}
              title={newsItem.title}
              category={newsItem.category}
              date={newsItem.date}
              imglink={newsItem.imglink}
            />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default News;
