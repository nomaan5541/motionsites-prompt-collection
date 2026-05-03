import AnimatedTitle from "./AnimatedTitle";

const Metrics = () => {
  const metrics = [
    {
      value: "100M+",
      label: "Treasury Value",
      containerClass: "bg-blue-600 text-white",
      description: "Supporting the growth of the Design Economy",
    },
    {
      value: "$20M+",
      label: "Value Distributed",
      containerClass: "bg-violet-300 text-black",
      description: "Rewarding our vibrant community",
    },
    {
      value: "970GB+",
      label: "Design Data",
      containerClass: "bg-white text-black border border-black/5",
      description: "Processing the future of creative AI",
    },
  ];

  const partners = [
    "Coinbase Ventures", "YZI Labs", "Spartan", "LongHash", "Pantera Capital", 
    "Animoca Brands", "Defiance Capital", "Play Ventures", "Skyvision Capital", 
    "Vessel Capital", "Arche Fund", "Synergis"
  ];

  return (
    <section id="metrics" className="bg-black py-32">
      <div className="container mx-auto px-3 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Metrics Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-3xl p-10 h-80 ${metric.containerClass} ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <p className="font-general text-xs uppercase opacity-70 mb-2">{metric.label}</p>
                  <h2 className="font-zentry text-6xl md:text-8xl uppercase font-black">
                    {metric.value}
                  </h2>
                </div>
                <p className="max-w-64 font-circular-web text-sm opacity-80 uppercase">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partners List */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-neutral-900 p-10 text-white">
            <div>
              <p className="font-general text-xs uppercase text-blue-50/50 mb-10">
                World-Class Backers
              </p>
              <div className="flex flex-col gap-4">
                {partners.map((partner, index) => (
                  <p
                    key={index}
                    className="font-general text-lg uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity cursor-default"
                  >
                    {partner}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="font-circular-web text-xs uppercase opacity-50">
                Building the future of design with the best in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
