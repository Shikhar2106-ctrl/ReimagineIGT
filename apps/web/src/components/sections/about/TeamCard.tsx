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
      className="group overflow-hidden text-center"
    >
      <img
        src={image}
        alt={name}
        className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-brand/10 transition-transform duration-300 group-hover:scale-105"
      />

      <h3 className="mt-8 text-2xl font-bold text-text-primary">
        {name}
      </h3>

      <p className="mt-2 font-medium text-brand">
        {designation}
      </p>

      <p className="mt-5 leading-7 text-text-secondary">
        {bio}
      </p>

      <div className="mt-8 flex justify-center gap-4">

        <a
          href={socials.linkedin}
          className="rounded-full border border-border p-3 transition hover:border-brand hover:bg-brand hover:text-white"
        >
          <Globe2 size={18} />
        </a>

        <a
          href={`mailto:${socials.email}`}
          className="rounded-full border border-border p-3 transition hover:border-brand hover:bg-brand hover:text-white"
        >
          <Mail size={18} />
        </a>

      </div>
    </Card>
  );
}                                                                                                       
