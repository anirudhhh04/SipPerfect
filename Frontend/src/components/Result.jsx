import { motion } from "framer-motion";

function Result({ result }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        max-w-3xl
        mx-auto
        mt-10

        bg-white/5
        backdrop-blur-md

        border
        border-green-400/20

        rounded-3xl

        p-8

        text-center

        shadow-xl
        shadow-green-500/10
      "
    >
      {/* Status Badge */}

      <div
        className="
          inline-flex
          items-center

          px-4
          py-2

          rounded-full

          bg-green-500/10

          border
          border-green-400/20

          text-green-300
          text-sm
          font-semibold

          mb-6
        "
      >
        ✓ AI Prediction Complete
      </div>

      {/* Icon */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-7xl mb-4"
      >
        ☕
      </motion.div>


      <h2
        className="
          text-3xl
          md:text-4xl

          font-bold

          bg-gradient-to-r
          from-green-300
          to-emerald-400

          bg-clip-text
          text-transparent
        "
      >
        Perfect Sip Found
      </h2>

      {/* Ready Time */}

      <div className="mt-8">

        <p
          className="
            text-gray-400
            uppercase
            tracking-widest
            text-sm
          "
        >
          READY AT
        </p>

        <h3
          className="
            text-5xl
            font-black
            text-white

            mt-3
          "
        >
          {result.ready_at}
        </h3>

      </div>

      <div
        className="
          mt-8

          rounded-2xl

          bg-white/5

          border
          border-white/10

          p-5
        "
      >
        <p
          className="
            text-gray-300
            leading-relaxed
            text-lg
          "
        >
          {result.message}
        </p>
      </div>

      {/* Footer */}

      <div
        className="
          mt-6

          text-sm
          text-gray-500
        "
      >
        Powered by SipPerfect AI
      </div>

    </motion.div>
  );
}

export default Result;