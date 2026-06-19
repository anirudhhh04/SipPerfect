import { FaRegFileAlt, FaWineGlassAlt, FaMugHot } from "react-icons/fa";
import { GiSteelClaws } from "react-icons/gi";
import { GiMetalBar } from "react-icons/gi";
function CupSelector({ cupMaterial, setCupMaterial }) {
  const cups = [
    {
      id: 0,
      name: "Paper",
      icon: <FaRegFileAlt size={50} />,
      desc: "Fast Cooling",
      color: "text-yellow-300",
    },
    {
      id: 1,
      name: "Glass",
      icon: <FaWineGlassAlt size={50} />,
      desc: "Medium Cooling",
      color: "text-sky-300",
    },
    {
      id: 2,
      name: "Ceramic",
      icon: <FaMugHot size={50} />,
      desc: "Heat Retention",
      color: "text-orange-300",
    },
    {
      id: 3,
      name: "Steel",
      icon: <GiMetalBar size={50} />,
      desc: "Slow Cooling",
      color: "text-slate-300",
    },
  ];

  return (
    <div className=" mt-6 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl pt-6 px-6 pb-8">

      <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-6">
         Cup Material
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {cups.map((cup) => (
          <button
            key={cup.id}
            onClick={() => setCupMaterial(cup.id)}
            className={`
              p-5
              rounded-2xl
              border
              transition-all
              duration-300
              hover:scale-105
              ${
                cupMaterial === cup.id
                  ? "border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-500/20"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <div
              className={`
                flex
                justify-center
                mb-4
                ${cup.color}
              `}
            >
              {cup.icon}
            </div>

            <div className="text-white font-semibold text-lg">
              {cup.name}
            </div>

            <div className="text-gray-400 text-sm mt-1">
              {cup.desc}
            </div>
          </button>
        ))}

      </div>

    </div>
  );
}

export default CupSelector;