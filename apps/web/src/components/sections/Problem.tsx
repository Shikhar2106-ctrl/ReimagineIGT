import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import StatCard from "@/components/ui/StatCard";
import SectionHeader from "@/components/common/SectionHeader";

import { problemContent } from "@/content/problem";

export default function Problem() {
  return (
    <Section id="technology">
      <Container>

        <div className="grid gap-20 lg:grid-cols-2">

          <div>

            <SectionHeader
  badge={problemContent.badge}
                title={problemContent.title}
                description={problemContent.description}
                />

            <div className="mt-10 space-y-4">

              {problemContent.highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-teal-700"
                    size={20}
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {problemContent.stats.map((stat) => (

              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />

            ))}

          </div>

        </div>

      </Container>
    </Section>
  );
}