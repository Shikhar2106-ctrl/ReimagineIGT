import {
  ArrowUpRight,
  Clock3,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";



const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "info@intelligreentech.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-99710 02858",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "3rd Floor, Unit No. COS/C/3L/Office/17, M3M Cosmopolitan, Sector-66, Gurgaon",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    value: "Mon – Fri • 10:00 AM – 6:30 PM",
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: Send,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Globe,
    href: "#",
  },
  {
    name: "Website",
    icon: Globe,
    href: "#",
  },
];

export default function ContactSidebar() {
  return (
    <div className="space-y-6">

      {/* Contact Information */}

      <div className="rounded-[32px] border border-border bg-amber-900 p-8 shadow-sm">

        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          Contact Information
        </span>

        <h3 className="mt-4 text-2xl font-bold text-text-primary">
          Reach Out Anytime
        </h3>

        <p className="mt-3 leading-7 text-text-secondary">
          Our team is always happy to answer your questions and
          discuss your project requirements.
        </p>

        <div className="mt-8 space-y-6">

          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-3xl
                  border-border
                  bg-gray-500
                  p-5
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-brand/10
                    text-brand
                  "
                >
                  <Icon size={20} />
                </div>

                <div className="min-w-0">

                  <p className="text-sm font-medium uppercase tracking-wide text-text-muted">
                    {item.title}
                  </p>

                  <p className="mt-1 leading-7 text-text-primary">
                    {item.value}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Social Links */}

      <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm">

        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          Follow Us
        </span>

        <h3 className="mt-4 text-2xl font-bold text-text-primary">
          Stay Connected
        </h3>

        <p className="mt-3 leading-7 text-text-secondary">
          Follow IntelliGreen for product updates, technology
          insights and industry news.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  transition-all
                  hover:border-brand/30
                  hover:bg-brand/10
                "
              >
                <Icon
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </motion.a>
            );
          })}

        </div>

      </div>

      {/* Quick Response Card */}

      <div
        className="
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-brand
          to-brand-dark
          p-8
          text-white
        "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Quick Response
        </p>

        <h3 className="mt-4 text-3xl font-bold leading-tight">
          We typically reply within 24 hours.
        </h3>

        <p className="mt-5 leading-8 text-white/80">
          Every inquiry is reviewed by our team to ensure you receive
          the right guidance and support.
        </p>

        <button
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            font-semibold
            text-white
          "
        >
          Learn More

          <ArrowUpRight size={18} />
        </button>

      </div>

    </div>
  );
}