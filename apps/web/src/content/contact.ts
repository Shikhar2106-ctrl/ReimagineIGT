import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const contactContent = {
  hero: {
    badge: "Contact",

    title: "Let's Build Healthier Spaces Together.",

    description:
      "Whether you're planning a new project, exploring our intelligent air quality solutions, or simply have a question, our team is here to help.",

    primaryButton: "Get in Touch",

    secondaryButton: "Live Support",
  },

  cards: [
    {
      icon: Mail,

      title: "Email Us",

      value: "info@intelligreen.com",

      description: "Reach us anytime via email.",
    },

    {
      icon: Phone,

      title: "Call Us",

      value: "+91 98765 43210",

      description: "Monday – Friday • 9:00 AM – 6:00 PM",
    },

    {
      icon: MapPin,

      title: "Visit Office",

      value: "Bhopal, Madhya Pradesh",

      description: "Corporate Headquarters",
    },

    {
      icon: Clock3,

      title: "Support",

      value: "24 / 7 Assistance",

      description: "Our team is always available to help.",
    },
  ],

  form: {
    badge: "Contact Form",

    title: "Tell us about your project",

    description:
      "Fill out the form below and our team will get back to you within one business day.",

    fields: {
      name: "Full Name",

      email: "Email",

      company: "Company",

      phone: "Phone Number",

      subject: "Subject",

      message: "Message",
    },

    placeholders: {
      name: "John Doe",

      email: "you@example.com",

      company: "Company Name",

      phone: "+91 98765 43210",

      subject: "How can we help you?",

      message: "Tell us more about your project...",
    },

    submit: "Send Message",
  },

  sidebar: {
    badge: "Contact Information",

    title: "Reach Out Anytime",

    description:
      "Our team is always happy to answer your questions and discuss your project requirements.",

    responseTitle: "Quick Response",

    responseHeading: "We typically reply within 24 hours.",

    responseDescription:
      "Every enquiry is reviewed carefully so that you receive the right guidance and support.",

    learnMore: "Learn More",
  },

  office: {
    badge: "Our Office",

    title: "Visit Our Headquarters",

    description:
      "Whether you're visiting us for a meeting or discussing a new project, we'd be delighted to welcome you.",

    address: {
      title: "Address",

      value: `IntelliGreen Technologies
Bhopal, Madhya Pradesh
India`,
    },

    hours: {
      title: "Office Hours",

      value: `Monday – Friday
9:00 AM – 6:00 PM`,
    },

    button: "View on Google Maps",

    cardTitle: "Headquarters",

    cardDescription:
      "Our headquarters brings together engineering, innovation and customer success to build intelligent indoor environmental solutions.",
  },

  faq: {
    badge: "FAQ",

    title: "Frequently Asked Questions",

    description:
      "Everything you need to know before getting started with IntelliGreen.",

    questions: [
      {
        question: "How quickly will I receive a response?",

        answer:
          "Our team typically responds to all enquiries within one business day.",
      },

      {
        question: "Do you provide installation services?",

        answer:
          "Yes. We provide consultation, installation, commissioning and after-sales support.",
      },

      {
        question: "Can IntelliGreen solutions be customized?",

        answer:
          "Absolutely. Every solution is tailored according to your project requirements.",
      },

      {
        question:
          "Do you work with commercial and residential projects?",

        answer:
          "Yes. We provide solutions for commercial buildings, hospitals, educational institutions, industries, hospitality spaces and residences.",
      },

      {
        question: "How can I schedule a demonstration?",

        answer:
          "Simply submit the contact form or contact us directly through email or phone.",
      },
    ],
  },

  social: [
    {
      name: "LinkedIn",

      href: "#",
    },

    {
      name: "Instagram",

      href: "#",
    },

    {
      name: "Facebook",

      href: "#",
    },
  ],
};