import { motion } from "framer-motion";

interface ShowcaseCardProps {
  image: string;
  alt: string;
  rotate?: number;
}

export default function ShowcaseCard({
  image,
  alt,
  rotate = 0,
}: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{
        rotate,
      }}
      whileHover={{
        rotate: 0,
        y: -10,
        scale: 1.04,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        group
        relative
        h-full
        w-full
        cursor-pointer
        overflow-hidden
        rounded-[32px]
        border
        border-white/40
        bg-white
        shadow-[0_25px_80px_rgba(15,23,42,0.12)]
        will-change-transform
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        draggable={false}
        className="
          h-full
          w-full
          select-none
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.08]
        "
      />

      {/* Dark Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/45
          via-black/10
          to-transparent
        "
      />

      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Bottom Blur */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-28
          bg-gradient-to-t
          from-black/55
          to-transparent
        "
      />
    </motion.div>
  );
}