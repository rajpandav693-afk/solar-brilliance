import { useState } from "react";
import { MapPin, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Residential Installation",
    location: "Surat, Gujarat",
    type: "Residential",
    capacity: "5 kW",
  },
  {
    id: 2,
    image: project2,
    title: "Rooftop Solar System",
    location: "Surat, Gujarat",
    type: "Residential",
    capacity: "3 kW",
  },
  {
    id: 3,
    image: project3,
    title: "Commercial Solar Project",
    location: "Surat, Gujarat",
    type: "Commercial",
    capacity: "10 kW",
  },
  {
    id: 4,
    image: project4,
    title: "Multi-Panel Installation",
    location: "Surat, Gujarat",
    type: "Residential",
    capacity: "7 kW",
  },
  {
    id: 5,
    image: project5,
    title: "Premium Solar Setup",
    location: "Surat, Gujarat",
    type: "Commercial",
    capacity: "15 kW",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const headerAnim = useScrollAnimation();

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.type.toLowerCase() === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent">
        <div className="container mx-auto px-4">
          <div
            ref={headerAnim.ref}
            className={`max-w-3xl mx-auto text-center ${headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse through our completed solar installations across Gujarat.
              Every project showcases our commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {["all", "residential", "commercial"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover-lift"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-primary/80 px-2 py-1 rounded text-xs">
                      {project.type}
                    </span>
                    <span className="bg-background/20 px-2 py-1 rounded text-xs">
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-card rounded-2xl overflow-hidden max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  {selectedProject.type}
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {selectedProject.capacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
