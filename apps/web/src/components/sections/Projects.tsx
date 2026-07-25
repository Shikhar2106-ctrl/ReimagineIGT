import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ProjectCard from "@/components/common/ProjectCard";
import SectionHeader from "@/components/common/SectionHeader";

import { projectsContent } from "@/content/projects";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <Section size="spacious" className="bg-surface-muted">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={projectsContent.badge}
            title={projectsContent.title}
            description={projectsContent.description}
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-3">
          {projectsContent.items.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
