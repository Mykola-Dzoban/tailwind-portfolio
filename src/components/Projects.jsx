import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((item)=>{
          return <ProjectCard key={item.id} {...item} />
        })}
      </div>
    </section>
  );
};
export default Projects;
