import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { clientLogos } from "@/content/clients";

const row1 = [...clientLogos, ...clientLogos];
const row2 = [...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()];

function LogoCard({ logo }: { logo: string }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        duration: 2.3,
      }}
      className="
        group
        flex
        h-24
        w-40
        shrink-0
        cursor-pointer
        items-center
        justify-center
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-brand/40
        hover:bg-brand/5
        hover:shadow-xl
        sm:w-44
        md:w-48
      "
    >
      <img
        src={logo}
        alt="Client Logo"
        loading="lazy"
        draggable={false}
        className="
            max-h-12
            max-w-35
            object-contain
            grayscale
            opacity-70
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:grayscale-0
            group-hover:opacity-100
        "
        />
    </motion.div>
  );
}

export default function Clients() {
  return (
    <Section className="overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <Container className="h-screen flex flex-col items-center">

        <div className="mx-auto max-w-3xl flex max-w-3xl flex-col items-center text-center">

          <span className="text-xs inline-flex rounded-full bg-brand/10 px-4 py-2 font-semibold uppercase tracking-[0.32em] text-brand">
            Trusted Worldwide
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Trusted by Industry Leaders
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Organizations across healthcare, education,
            hospitality and commercial spaces trust IntelliGreen
            to deliver healthier indoor environments.
          </p>

        </div>
        <div className="mt-16 flex flex-col gap-2 lg:mt-20  "> 
          {/* ROW 1 */}
          <div className="relative overflow-hidden">
            <div className="clients-mask h-32 flex items-center">
              <div className="clients-row-left flex items-center gap-8">
                {row1.map((logo, index) => (
                  <LogoCard key={index} logo={logo} />
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="relative overflow-hidden">
            <div className="clients-mask h-32 flex items-center">
              <div className="clients-row-right flex items-center gap-8">
                {row2.map((logo, index) => (
                  <LogoCard key={index} logo={logo} />
                ))}
              </div>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}

