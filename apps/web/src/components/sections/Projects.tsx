import ProjectCard from "@/components/common/ProjectCard";
import SectionHeader from "@/components/common/SectionHeader";

import { projectsContent } from "@/content/projects";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <Section className="bg-surface-muted">

      <Container>

        <SectionHeader
          badge={projectsContent.badge}
          title={projectsContent.title}
          description={projectsContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {projectsContent.items.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}