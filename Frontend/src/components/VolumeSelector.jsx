import { FaGlassWhiskey } from "react-icons/fa";

function VolumeSelector({ volume, setVolume }) {
  const presets = [150, 250, 350, 500];

  return (
    <div className=" mt-6 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">

      <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
         Tea Volume
      </h2>

    

      <div className="max-w-[600px] mx-auto flex items-center gap-4">

        <FaGlassWhiskey
          size={45}
          className="text-green-300 flex-shrink-0"
        />

        <div className="flex-1">
          <input
            type="range"
            min="100"
            max="600"
            step="10"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-green-400"
          />
        </div>

        <div className="
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
  ">
          {volume}ml
        </div>

      </div>

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
    value={volume}
    onChange={(e) => setVolume(Number(e.target.value))}
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

export default VolumeSelector;