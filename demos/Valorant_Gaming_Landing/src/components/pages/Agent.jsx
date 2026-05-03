import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { loadAgents } from "../../constants/scripts";
import { agentsbgvideo } from "../../assets";

const Agent = () => {
  let { agentName } = useParams();
  const [agent, setAgent] = useState({});
  const [agents, setAgents] = useState([]);
  const [abilitiesIdx, setAbilitiesIdx] = useState(0);

  useEffect(() => {
    loadAgents().then((response) => {
      setAgents(response.data);
      setAgent(
        response.data.filter((agent) => agent.displayName === agentName)[0]
      );
    });
  }, [agentName]);

  if (!agent.role) return;

  return (
    <>
      <section className="relative flex items-center justify-center h-screen  sm:h-[85vh] h-[60vh] w-[100vw] sm:px-[5%] px-0 bg-[#0f1923] z-[-1]">
        <div className={`relative flex items-end justify-center flex-col w-full h-full`}>
          <div className={`relative flex md:flex-row-reverse flex-col-reverse justify-end items-center`}>
            <div className={`${layout.sectionInfo} relative md:mr-16 max-w-[16rem]`}>
              <div className="relative m-width-[25%] pb-10 border-b border-gray-500  sm:block hidden">
                <h5 className="font-semiold text-secondary">// ROLE</h5>
                <div className="flex mb-6">
                  <h2 className="font-extrabold text-secondary text-[3rem] uppercase">
                    {agent.role.displayName}
                  </h2>
                  <div className="h-[30px] w-[30px]">
                    <img
                      src={agent.role.displayIcon}
                      alt={agent.role.displayName}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <h5 className="font-semibold text-secondary mb-8">
                  // BIOGRAPHY
                </h5>
                <span className="text-white">{agent.description}</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block absolute left-0 top-0 overflow-x-hidden overflow-y-scroll h-[100%] no-scrollbar w-auto px-2 w-[56vw] cursor-scroll">
            <ul className="pl-10 cursor-pointer">
              {agents &&
                agents.map((agent, index) => (
                  <li
                    key={agent.uuid}
                    className="relative"
                  >
                    <Link to={`/agent/${agent.displayName}`}>
                      <span
                        className={`font-bold text-secondary absolute left-[-1.5rem] top-[0.5rem] ${
                          agent.displayName === agentName ? "text-primary" : ""
                        }`}
                      >
                        {index + 1}
                      </span>
                      <h2
                        className={`relative font-bold text-secondary mb-8 sm:text-[6rem] text-[3rem] leading-none my-0 leading-[0.86] hover:pl-[1rem]  transition-all ease-in duration-300 uppercase ${
                          agent.displayName === agentName ? "text-primary" : ""
                        }`}
                      >
                        {agent.displayName}
                      </h2>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div
          className="absolute sm:w-[100vw] h-full object-cover z-[-1] bg-gradient-to-t from-black/70 to-transparent"
        >
          <source
            src={agentsbgvideo}
            type="video/mp4"
          />
        </div>
        <img
          src={agent.fullPortrait}
          alt="agents"
          className="absolute w-auto sm:h-[110vh] h-[80vh] object-cover bottom-[-6rem] z-[-1]"
        ></img>
      </section>
      <div className={`relative ${styles.paddingX} my-10 pt-[4rem]`}>
        <div className="relative pb-10 border-b border-[#000]-500 sm:hidden visible">
          <h5 className="font-semiold text-black">// ROLE</h5>
          <div className="flex mb-6">
            <h2 className="font-bold text-black text-[3rem] uppercase">
              {agent.role.displayName}
            </h2>
            <div className="h-[30px] w-[30px]">
              <img
                src={agent.role.displayIcon}
                alt={agent.role.displayName}
                className="h-full w-full bg-[#000] rounded-full"
              />
            </div>
          </div>
          <h5 className="font-semibold text-black mb-8">// BIOGRAPHY</h5>
          <span className="text-shadow">{agent.description}</span>
        </div>
        <div className="relative">
          <h2 className="font-bold text-black text-[3rem] uppercase">
            SPECIAL ABILITIES
          </h2>
          <ul className="relative flex py-4 gap-6 mx-2">
            {agent.abilities.map((ability, index) => (
              <li key={ability.slot} onClick={(e) => setAbilitiesIdx(index)}>
                <div className={`relative h-[72px] w-[72px] border p-2 cursor-pointer ${index===abilitiesIdx ? "bg-[#0f1923]":"bg-[#0f1923]/50 border-[#fff]-500 hover:bg-[#0f1923]/80"}`}>
                  <img
                    src={ability.displayIcon}
                    alt={ability.slot}
                    className="w-[100%] w-[100%]"
                  />
                </div>
              </li>
            ))}
          </ul>
          <h5 className="font-semibold text-black mb-8 uppercase">
            {agent.abilities[abilitiesIdx].displayName}
          </h5>
          <span className="text-shadow">{agent.abilities[abilitiesIdx].description}</span>
        </div>
      </div>
    </>
  );
};

export default Agent;
