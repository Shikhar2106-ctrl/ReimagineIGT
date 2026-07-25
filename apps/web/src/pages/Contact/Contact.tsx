import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactSidebar from "@/components/contact/ContactSidebar";
import FAQ from "@/components/contact/FAQ";
import OfficeLocation from "@/components/contact/OfficeLocation";

export default function ContactPage() {
  return (
    <main className="bg-amber-100">

      {/* Hero */}
      <ContactHero />

      {/* Contact Cards */}
      <ContactCards />

      {/* Form + Sidebar */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">

              <ContactForm />

              <ContactSidebar />

          </div>

        </div>
      </section>

      {/* Office */}

      <OfficeLocation />

      {/* FAQ */}

      <FAQ />

    </main>
  );
}