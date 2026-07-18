import {
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import Container from "@/components/ui/Container";

import { footerContent } from "@/content/footer";

const icons = {
  LinkedIn: Globe,
  Instagram: Send,
  Facebook: MessageCircle,
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-20">

      <Container>

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-2xl font-bold text-text-primary">
              {footerContent.company.name}
            </h2>

            <p className="mt-6 leading-7 text-text-secondary">
              {footerContent.company.description}
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {footerContent.quickLinks.map((link) => (

                <li key={link}>

                  <a
                    href="#"
                    className="transition-colors hover:text-brand text-text-secondary"
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold text-text-primary">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">

              {footerContent.resources.map((link) => (

                <li key={link}>

                  <a
                    href="#"
                    className="transition-colors hover:text-brand text-text-secondary"
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-text-primary">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 text-brand"
                />

                <span className="text-text-secondary">
                  {footerContent.contact.email}
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-1 text-brand"
                />

                <span className="text-text-secondary">
                  {footerContent.contact.phone}
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-brand"
                />

                <span className="text-text-secondary">
                  {footerContent.contact.address}
                </span>

              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              {footerContent.social.map((item) => {
                const Icon = icons[item.name as keyof typeof icons];

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      transition-all
                      hover:border-brand
                      hover:bg-brand
                      hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted md:flex-row">

          <p>
            © {new Date().getFullYear()} IntelliGreen. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-brand">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-brand">
              Terms of Service
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
}