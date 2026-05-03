import styles, { layout } from "../../style";
import React, { useEffect, useState } from "react";
import { loadMaps } from "../../constants/scripts";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [mapIndex, setMapIndex] = useState(0);

  useEffect(() => {
    loadMaps().then((response) => {
      setMaps(response.data);
    });
    console.log(mapIndex)
  }, [mapIndex]);

  if (!maps.length) return;
  return (
    <div className="relative bg-secondary sm:p-4">
      <section id="maps" className={`${styles.paddingX}`}>
        <h1 className="absolute font-bold sm:text-[6rem] text-[3rem] z-[5]">
          MAPS
        </h1>
        <div className={`${layout.sectionReverse}`}>
          <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2} text-primary`}>
              {maps[mapIndex].displayName}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-shadow`}>
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div className="dots flex">
              <ul className="flex py-4 my-2">
                {maps.map((map, index) => (
                  <li key={map.uuid} onClick={()=>setMapIndex(index)} className={`dot hover:bg-primary bg-red  ${index ? "ml-2" : ""} ${index === mapIndex ? "bg-primary" : "bg-red"}`}></li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`relative ${layout.sectionImgReverse}`}>
            <img
              src={maps[mapIndex].splash}
              alt=""
              className="w-[100%] h-[100%] relative md:px-4 md:py-8 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maps;
