import {
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { footerContent } from "@/content/footer";

const icons = {
  LinkedIn: Globe,
  Instagram: Send,
  Facebook: MessageCircle,
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Background Watermark */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <h1 className="absolute left-1/2 top-16 -translate-x-1/2 select-none text-[8rem] font-black uppercase tracking-[0.15em] text-white/3 lg:text-[13rem]">
          IntelliGreen
        </h1>

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">

        {/* CTA */}

        <div className="border-b border-white/10 py-20">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="max-w-2xl">

              <span className="text-xs uppercase tracking-[0.3em] text-brand">
                Let's Build Together
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Ready to transform your indoor environment?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Discover intelligent air quality solutions designed for
                healthier, smarter and more sustainable spaces.
              </p>

            </div>

            <Button
              size="lg"
              className="bg-brand text-white hover:bg-brand-dark"
            >
              Contact Us

              <ArrowRight className="ml-2" size={18} />

            </Button>

          </div>

        </div>

        {/* Main Footer */}

        <div className="grid gap-14 py-20 lg:grid-cols-[2.5fr_1fr_1fr_1.5fr]">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              {footerContent.company.name}
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              {footerContent.company.description}
            </p>

            <div className="mt-10 flex gap-4">

              {footerContent.social.map((item) => {

                const Icon = icons[item.name as keyof typeof icons];

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{
                      y: -6,
                      rotate: 8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur
                      transition-all
                      hover:border-brand
                      hover:bg-brand
                    "
                  >
                    <Icon size={18} />
                  </motion.a>
                );

              })}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5">

              {footerContent.quickLinks.map((link) => (

                <motion.li
                  whileHover={{ x: 6 }}
                  key={link.label}
                >

                  <a
                    href="#"
                    className="group inline-flex items-center text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}

                    <ArrowRight
                      size={15}
                      className="ml-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </a>

                </motion.li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Resources
            </h3>

            <ul className="mt-8 space-y-5">

              {footerContent.resources.map((link) => (

                <motion.li
                  whileHover={{ x: 6 }}
                  key={link.label}
                >

                  <a
                    href="#"
                    className="group inline-flex items-center text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}

                    <ArrowRight
                      size={15}
                      className="ml-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </a>

                </motion.li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Contact
            </h3>

            <div className="mt-8 space-y-5">

              {[
                {
                  icon: Mail,
                  value: footerContent.contact.email,
                },
                {
                  icon: Phone,
                  value: footerContent.contact.phone,
                },
                {
                  icon: MapPin,
                  value: footerContent.contact.address,
                },
              ].map(({ icon: Icon, value }) => (

                <motion.div
                  key={value}
                  whileHover={{
                    x: 4,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur
                  "
                >

                  <div className="rounded-xl bg-brand/20 p-2">

                    <Icon
                      size={18}
                      className="text-brand"
                    />

                  </div>

                  <span className="leading-7 text-slate-300">
                    {value}
                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} IntelliGreen. All rights reserved.
          </p>

          <div className="flex gap-8">

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </Container>
    </footer>
  );
}