import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Leaf, Wifi } from "lucide-react";

const orbitItems = [
  {
    icon: BrainCircuit,
    label: "AI",
    top: "5%",
    left: "48%",
  },
  {
    icon: Wifi,
    label: "IoT",
    top: "45%",
    right: "10%",
  },
  {
    icon: Leaf,
    label: "Clean Air",
    bottom: "5%",
    left: "48%",
  },
  {
    icon: Cpu,
    label: "Analytics",
    top: "45%",
    left: "10%",
  },
];

export default function AICore() {
  return (
    <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-cyan-500/10" />

      <div className="absolute h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute h-56 w-56 rounded-full border border-dashed border-white/10"
      />

      {/* Middle Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
        className="absolute h-44 w-44 rounded-full border border-white/10"
      />

      {/* Pulse Ring */}

      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.1, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute h-24 w-24 rounded-full border border-brand"
      />

      {/* Core */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
          relative
          z-20
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-brand
          to-cyan-500
          shadow-[0_0_40px_rgba(34,197,94,0.35)]
        "
      >
        <BrainCircuit size={34} className="text-white" />
      </motion.div>

      {/* Orbit Items */}

      {orbitItems.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            whileHover={{
              scale: 1.1,
            }}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex flex-col items-center gap-2">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur
                "
              >
                <Icon size={18} className="text-brand" />
              </div>

              <span className="text-xs font-medium text-text-secondary">
                {item.label}
              </span>

            </div>
          </motion.div>
        );
      })}

      {/* Bottom Text */}

      <div className="absolute bottom-10 text-center">

        <h3 className="text-xl font-semibold text-text-primary">
          AI Core
        </h3>

        <p className="mt-2 text-sm text-text-secondary">
          Intelligence powering every solution.
        </p>

      </div>
    </div>
  );
}