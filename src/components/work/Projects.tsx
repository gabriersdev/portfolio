import {getPosts} from "@/app/utils/utils";
import {Column} from "@/once-ui/components";
import {ProjectCard} from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  variant?: string;
}

export function Projects({range, variant}: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  let sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  }).toReversed();
  
  if (variant === "work-page") sortedProjects = sortedProjects.toReversed();

  let displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="0">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({src: member.avatar})) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
