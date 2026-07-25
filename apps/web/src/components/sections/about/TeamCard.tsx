import { Globe2, Mail } from "lucide-react";

import Card from "@/components/ui/Card";

interface TeamCardProps {
  name: string;
  designation: string;
  bio: string;
  image: string;
  socials: {
    linkedin: string;
    email: string;
  };
}

export default function TeamCard({
  name,
  designation,
  bio,
  image,
  socials,
}: TeamCardProps) {
  return (
    <Card
      hover
      className="group flex h-full flex-col overflow-hidden p-6 text-center sm:p-8"
    >
      <img
        src={image}
        alt={name}
        className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-brand/10 transition-transform duration-300 group-hover:scale-105 sm:h-36 sm:w-36"
      />

      <h3 className="mt-6 text-xl font-bold text-text-primary sm:text-2xl">
        {name}
      </h3>

      <p className="mt-2 font-medium text-brand">
        {designation}
      </p>

      <p className="mt-4 leading-7 text-text-secondary">
        {bio}
      </p>

      <div className="mt-auto flex justify-center gap-3 pt-7">

        <a
          href={socials.linkedin}
          aria-label={`${name}'s professional profile`}
          className="rounded-full border border-border p-3 transition hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Globe2 size={18} />
        </a>

        <a
          href={`mailto:${socials.email}`}
          aria-label={`Email ${name}`}
          className="rounded-full border border-border p-3 transition hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Mail size={18} />
        </a>

      </div>
    </Card>
  );
}                                                                                                       
