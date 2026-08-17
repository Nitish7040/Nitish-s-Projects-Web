import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import projectsData from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const categories = [
  { id: 'all', label: '00 / ALL' },
  { id: 'mern', label: '01 / MERN' },
  { id: 'aws', label: '02 / AWS' },
  { id: 'devops', label: '03 / DEVOPS' },
  { id: 'academic', label: '04 / ACADEMIC' },
]

function Projects() {
  const [sectionRef, isVisible] = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredProject = projectsData.find((p) => p.id === 'galleryone')
  
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'academic') return project.isAcademic
    return project.category === activeFilter
  })

  // Projects list excluding featured project when "all" is selected
  const gridProjects = activeFilter === 'all'
    ? filteredProjects.filter((p) => p.id !== 'galleryone')
    : filteredProjects

  return (
    <>
      <section
        id="projects"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-tag">05 / SELECTED WORK</span>
            </div>
            <h2 className="section-title">
              REAL PROJECTS &amp; <span className="text-accent">ARCHITECTURE</span>
            </h2>
            <p className="section-desc">
              Production codebases, cloud infrastructure deployments, and full-stack web applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-brand-border font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'text-accent bg-accent/10 border border-accent/20 font-semibold'
                    : 'text-text-muted hover:text-text-primary hover:bg-brand-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured Hero Project (Rendered when Filter is 'all' or 'mern') */}
          {(activeFilter === 'all' || activeFilter === 'mern') && featuredProject && (
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <ProjectCard
                project={featuredProject}
                variant="featured"
                onCaseStudy={() => setSelectedProject(featuredProject)}
              />
            </div>
          )}

          {/* Primary Real Projects Grid (2-Column) */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="medium"
                  onCaseStudy={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default Projects
