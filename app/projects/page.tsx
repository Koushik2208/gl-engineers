import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Villa Complex",
      category: "Residential",
      location: "Bangalore",
      description: "A modern residential complex featuring 12 luxury villas with sustainable design elements.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      stats: {
        area: "45,000 sq ft",
        duration: "18 months",
        completed: "2023",
      },
    },
    {
      title: "Tech Park",
      category: "Commercial",
      location: "Hyderabad",
      description: "State-of-the-art office complex with smart building features and green spaces.",
      image: "https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?q=80&w=1200&auto=format&fit=crop",
      stats: {
        area: "120,000 sq ft",
        duration: "24 months",
        completed: "2022",
      },
    },
    {
      title: "Heritage Renovation",
      category: "Restoration",
      location: "Mumbai",
      description: "Careful restoration of a historic building while preserving its architectural heritage.",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
      stats: {
        area: "25,000 sq ft",
        duration: "12 months",
        completed: "2023",
      },
    },
    {
      title: "Eco Apartments",
      category: "Residential",
      location: "Pune",
      description: "Sustainable apartment complex with solar power and rainwater harvesting.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      stats: {
        area: "75,000 sq ft",
        duration: "20 months",
        completed: "2022",
      },
    },
  ];

  const categories = ["All", "Residential", "Commercial", "Restoration"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through our completed works
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full glass hover:bg-primary/10 
                         text-foreground/80 hover:text-primary transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70">{project.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-6">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-foreground/60">Area</p>
                      <p className="text-foreground/90 font-medium">{project.stats.area}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60">Duration</p>
                      <p className="text-foreground/90 font-medium">{project.stats.duration}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60">Completed</p>
                      <p className="text-foreground/90 font-medium">{project.stats.completed}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Let&apos;s discuss how we can help bring your vision to reality.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg 
                         font-semibold hover:bg-primary/90 transition-all duration-300 
                         hover-lift shadow-lg shadow-primary/20">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects; 