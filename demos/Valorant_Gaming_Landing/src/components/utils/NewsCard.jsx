import React from "react";

const NewsCard = ({ date, category, title, imglink }) => (
  <div className="news-card">
    <div className="w-[30vw] min-w-[500px] h-auto relative mr-4">
      <img src={imglink} alt="news1" className="w-[100%] h-auto relative" />
      <div className="text-black font-semibold">
        <span>{date}</span>
        <span className="ml-4 text-primary">{category}</span>
        <h3 className="my-2 font-bold text-[20px]">{title}</h3>
      </div>
    </div>
  </div>
);

export default NewsCard;
