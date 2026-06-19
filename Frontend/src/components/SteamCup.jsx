import { FaMugHot } from "react-icons/fa";

function SteamCup({ teaTemp, setTeaTemp }) {
  const presets = [85, 90, 95, 100];

  return (
    <div className=" mt-6 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">

      <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
        Drink Temperature
      </h2>

     
      {/* Current Temperature */}
      <div className="max-w-[600px] mx-auto flex items-center gap-4">

        <FaMugHot
          size={50}
          className="text-amber-300 flex-shrink-0"
          style={{
            filter:
              teaTemp >= 95
                ? "drop-shadow(0 0 12px orange)"
                : "none",
          }}
        />

        <div className="flex-1">
          <input
            type="range"
            min="50"
            max="100"
            value={teaTemp || 85}
            onChange={(e) => setTeaTemp(Number(e.target.value))}
            className="
              w-full
              h-2
              bg-slate-700
              rounded-lg
              appearance-none
              cursor-pointer
              accent-amber-400
            "
          />
        </div>

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
  "
        >
          {teaTemp}°
        </div>
      </div>

      {/* Custom Input */}
      <div
  className="
    w-44
    mx-auto
    mt-6

    rounded-full

    bg-white/10
    backdrop-blur-lg

    border
    border-white/10

    px-6
    py-3

    shadow-lg
  "
>
  <input
    type="number"
    value={teaTemp}
    onChange={(e) => setTeaTemp(Number(e.target.value))}
    className="
      w-full

      bg-transparent
      outline-none

      text-center

      text-xl
      font-semibold

      text-white
    "
  />
</div>

    </div>
  );
}

export default SteamCup;