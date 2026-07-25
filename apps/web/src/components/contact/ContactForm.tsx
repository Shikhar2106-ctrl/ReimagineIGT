import {
  Building2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <div className="rounded-4xl border border-border bg-emerald-900 flex flex-col gap-10 p-8 shadow-sm lg:p-10">

      {/* Heading */}

      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Contact Form
        </span>

        <h2 className="mt-4 text-3xl font-bold text-text-primary">
          Tell us about your project
        </h2>

        <p className="mt-4 max-w-xl text-2xl leading-8 text-text-secondary">
          Fill out the form below and our team will get back to you
          within one business day.
        </p>

      </div>

      {/* Form */}

      <form className="mt-10 space-y-6">

        {/* Row 1 */}

        <div className="grid gap-6 md:grid-cols-2">

          {/* Name */}

          <div>

            <label className="mb-3 pl-5 block text-text-primary">
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="text"
                placeholder="Example. John Doe"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  pl-14
                  pr-5
                  text-text-primary
                  outline-none
                  transition
                  focus:border-brand
                  focus:ring-4
                  focus:ring-brand/10
                "
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="mb-3 block font-semibold pl-5 text-lime-600">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="email"
                placeholder="you@example.com"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-brand
                  focus:ring-4
                  focus:ring-brand/10
                "
              />

            </div>

          </div>

        </div>

        {/* Row 2 */}

        <div className="grid gap-6 md:grid-cols-2 pt-3">

          {/* Company */}

          <div>

            <label className="mb-3 block pl-5 font-medium text-text-primary">
              Company
            </label>

            <div className="relative">

              <Building2
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-brand
                  focus:ring-4
                  focus:ring-brand/10
                "
              />

            </div>

          </div>

          {/* Phone */}

          <div>

            <label className="mb-3 block pl-5 font-medium text-text-primary">
              Phone Number
            </label>

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-brand
                  focus:ring-4
                  focus:ring-brand/10
                "
              />

            </div>

          </div>

        </div>

        {/* Subject */}

        <div className="md:grid-cols-2 pt-3" >

          <label className="mb-3 block pl-5 font-medium text-text-primary">
            Subject
          </label>

          <div className="relative">

            <MessageSquare
              size={18}
              className="absolute left-5 top-5 text-text-muted"
            />

            <input
              type="text"
              placeholder="How can we help you?"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-border
                bg-surface
                pl-14
                pr-5
                outline-none
                transition
                focus:border-brand
                focus:ring-4
                focus:ring-brand/10
              "
            />

          </div>

        </div>

        {/* Message */}

        <div className="md:grid-cols-2 pt-3">

          <label className="mb-3 block pl-5 font-medium text-text-primary">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Tell us more about your project..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-border
              bg-surface
              p-5
              outline-none
              transition
              focus:border-brand
              focus:ring-4
              focus:ring-brand/10
            "
          />

        </div>

        {/* Button */}

        <Button
          size="lg"
          className="w-full md:w-auto bg-[#5EF2A6] text-cyan-700 hover:text-amber-100"
        >
          <div className="font-semibold">Send Message</div>

          <Send
            size={18}
            className="ml-2"
          />

        </Button>

      </form>

      <div className="text-8xl text-center">
        <img className="rounded-4xl"
          src="/public/images/hero/frame-3.png"
          alt="Company branding illustration with the IntelliGreen Technologies wordmark in green and amber on a clean, modern background, conveying a professional and welcoming tone"
        />
      </div>

    </div>
  );
}