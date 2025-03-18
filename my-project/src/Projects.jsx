import React, { useState } from 'react';

const ProjectsPage = () => {
  // Sample project data - this would typically come from a database or API
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Weather Dashboard",
      student: "Emma Johnson",
      description: "A web application that shows current weather and forecasts using the OpenWeatherMap API.",
      technologies: ["React", "CSS", "APIs"],
      image: "https://placehold.co/400x300",
      year: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Student Planner App",
      student: "Michael Chen",
      description: "A mobile-friendly application to help students organize assignments and track deadlines.",
      technologies: ["JavaScript", "HTML", "LocalStorage"],
      image: "https://placehold.co/400x300",
      year: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "Chess Game",
      student: "Olivia Williams",
      description: "A fully functional chess game built with vanilla JavaScript with multiplayer support.",
      technologies: ["JavaScript", "HTML Canvas", "Socket.io"],
      image: "https://placehold.co/400x300",
      year: "2023",
      link: "#"
    },
    {
      id: 4,
      title: "School News Portal",
      student: "Daniel Patel",
      description: "A content management system for school news articles and announcements.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://placehold.co/400x300",
      year: "2023",
      link: "#"
    },
    {
      id: 5,
      title: "Science Quiz Game",
      student: "Sarah Ahmed",
      description: "An interactive quiz game focused on biology, chemistry, and physics topics.",
      technologies: ["Vue.js", "Firebase"],
      image: "https://placehold.co/400x300",
      year: "2024",
      link: "#"
    },
    {
      id: 6,
      title: "School Map Explorer",
      student: "James Wilson",
      description: "An interactive map of the school with room locations and information.",
      technologies: ["JavaScript", "SVG", "HTML"],
      image: "https://placehold.co/400x300",
      year: "2023",
      link: "#"
    }
  ]);

  const [filters, setFilters] = useState({
    year: "all",
    technology: "all"
  });

  // Get unique years and technologies for filter options
  const years = ["all", ...new Set(projects.map(project => project.year))];
  const technologies = ["all", ...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const yearMatch = filters.year === "all" || project.year === filters.year;
    const techMatch = filters.technology === "all" || project.technologies.includes(filters.technology);
    return yearMatch && techMatch;
  });

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <div className="py-16 px-4 text-center bg-slate-800">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Student Projects</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Explore innovative projects created by members of the London Central Secondary School Programming Club.
          Our students demonstrate their skills through these real-world applications.
        </p>
      </div>
      
      {/* Filters Section */}
      <div className="max-w-6xl mx-auto p-6 bg-slate-800 mt-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <label className="block text-yellow-400 mb-2">Filter by Year:</label>
            <select 
              className="bg-slate-700 text-white p-2 rounded-md"
              value={filters.year}
              onChange={(e) => handleFilterChange("year", e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year === "all" ? "All Years" : year}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-yellow-400 mb-2">Filter by Technology:</label>
            <select 
              className="bg-slate-700 text-white p-2 rounded-md"
              value={filters.technology}
              onChange={(e) => handleFilterChange("technology", e.target.value)}
            >
              {technologies.map(tech => (
                <option key={tech} value={tech}>{tech === "all" ? "All Technologies" : tech}</option>
              ))}
            </select>
          </div>
          
          <div className="self-end">
            <p className="text-yellow-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-slate-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-400">{project.title}</h3>
                <p className="text-sm text-yellow-200 mb-2">By {project.student} • {project.year}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-slate-700 text-xs px-2 py-1 rounded-full text-yellow-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="block text-center bg-yellow-500 text-slate-900 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="max-w-6xl mx-auto p-6 text-center">
          <p className="text-xl">No projects match your current filters. Try adjusting your criteria.</p>
        </div>
      )}
      
      {/* Submit Project CTA */}
      <div className="max-w-4xl mx-auto p-6 mt-8 mb-16 bg-slate-800 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Have a project to showcase?</h2>
        <p className="mb-6">
          Are you a LCSS Programming Club member? Submit your project to be featured on this page!
        </p>
        <button className="bg-yellow-500 text-slate-900 py-3 px-8 rounded-md font-bold hover:bg-yellow-400 transition-colors">
          Submit Your Project
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;