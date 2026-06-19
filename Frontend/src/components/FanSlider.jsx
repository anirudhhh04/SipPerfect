import { FaFan } from "react-icons/fa";

function FanSlider({ fanSpeed, setFanSpeed }) {
  return (
    <div className=" mt-6 max-w-3xl mx-auto min-h-[220px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">

      <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
        Fan Speed
      </h2>

      <div className="max-w-[600px] mx-auto flex items-center gap-4">

        {/* Fan */}
        <div className="flex-shrink-0">
          <FaFan
            size={60}
            className="text-cyan-300"
            style={{
              filter:
                fanSpeed === 0
                  ? "none"
                  : `drop-shadow(0 0 ${fanSpeed * 10}px #38bdf8)`,

              animation:
                fanSpeed === 0
                  ? "none"
                  : `fan-spin ${2 - fanSpeed * 0.3}s linear infinite`,
            }}
          />
        </div>

        {/* Slider */}
        <div className="flex-1">
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={fanSpeed}
            onChange={(e) => setFanSpeed(Number(e.target.value))}
            className="
              w-full
              h-2
              bg-slate-700
              rounded-lg
              appearance-none
              cursor-pointer
              accent-yellow-400
            "
          />
        </div>

        {/* Value */}
        <div
          className="
    w-20
    h-12

    rounded-xl

    bg-gradient-to-br
    from-amber-500/20
    to-orange-500/10

    border
    border-amber-400/20

    flex
    items-center
    justify-center

    text-xl
    font-bold

    text-amber-200

    shadow-lg
    shadow-amber-500/20
  "    >
          {fanSpeed}
        </div>

      </div>
    </div>
  );
}

export default FanSlider;