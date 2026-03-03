import { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    name: 'Cloud Infrastructure Automation',
    description: 'Fully automated AWS infrastructure provisioning using Terraform and CloudFormation. Includes VPC setup, auto-scaling groups, load balancers, and multi-AZ deployments with zero-downtime rollouts.',
    techStack: ['Terraform', 'AWS', 'CloudFormation', 'Python'],
    icon: 'cloud',
    github: 'https://github.com/Nitish7040',
    live: null,
  },
  {
    name: 'CI/CD Pipeline Framework',
    description: 'End-to-end CI/CD pipeline with automated testing, security scanning, container builds, and blue-green deployments. Reduced deployment time from hours to minutes across multiple environments.',
    techStack: ['Jenkins', 'GitHub Actions', 'Docker', 'ArgoCD'],
    icon: 'pipeline',
    github: 'https://github.com/Nitish7040',
    live: null,
  },
  {
    name: 'Kubernetes Cluster Manager',
    description: 'Production-grade Kubernetes cluster management tool with automated scaling, health monitoring, resource optimization, and self-healing capabilities for microservices architecture.',
    techStack: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    icon: 'kubernetes',
    github: 'https://github.com/Nitish7040',
    live: 'https://k8s-dashboard.nitishpandey.dev',
  },
  {
    name: 'Container Orchestration Platform',
    description: 'Multi-container application deployment platform using Docker Compose and Swarm. Features service discovery, load balancing, secret management, and centralized logging with ELK stack.',
    techStack: ['Docker', 'Docker Swarm', 'Nginx', 'ELK Stack'],
    icon: 'container',
    github: 'https://github.com/Nitish7040',
    live: null,
  },
  {
    name: 'Cloud Monitoring Dashboard',
    description: 'Real-time cloud infrastructure monitoring with custom dashboards, automated alerting, cost analytics, and anomaly detection across AWS, Azure, and GCP environments.',
    techStack: ['Grafana', 'Prometheus', 'AWS CloudWatch', 'Python'],
    icon: 'monitor',
    github: 'https://github.com/Nitish7040',
    live: 'https://monitor.nitishpandey.dev',
  },
]

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="relative pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0, 255, 65, 0.03) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent/40" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent/60 font-mono">
              Featured Work
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent/40" />
          </div>

          <h2 className="section-heading">
            <span className="text-white">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Cloud infrastructure, automation pipelines, and DevOps solutions
            built for scalability, reliability, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.name}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
