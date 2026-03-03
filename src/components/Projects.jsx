import { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    name: 'Terminal Style Portfolio – AWS Deployment',
    description: 'A personal portfolio website with a unique terminal-inspired UI, simulating command-line interactions to showcase projects, skills, and experience in an interactive way. Designed with a focus on responsiveness, minimalism, and performance. Deployed on AWS cloud infrastructure ensuring reliable hosting and scalable access.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'AWS S3', 'CloudFront', 'GitHub'],
    icon: 'terminal',
    github: 'https://github.com/Nitish7040/Nitish_Portfolio',
    live: 'https://nitishpandey.site/',
  },
  {
    name: 'Valentine Project – React (K8s Deployment)',
    description: 'Developed a responsive Valentine-themed web application using React.js and Tailwind CSS. Containerized and deployed on an EC2-hosted Kubernetes (Kind) cluster, managing infrastructure using Kubernetes manifests (Namespace, Deployment, and Service) with kubectl. Implemented proper resource isolation and service exposure using Kubernetes best practices.',
    techStack: ['React.js', 'Tailwind CSS', 'Docker', 'Kubernetes', 'AWS EC2', 'kubectl'],
    icon: 'heart',
    github: 'https://github.com/Nitish7040',
    live: null,
  },
  {
    name: 'Full-Stack Chat App — K8s Deployment',
    description: 'Deployed a full-stack 3-tier chat application on a Kubernetes (Kind) cluster running on an EC2 instance. Built Docker images for both the frontend and backend, pushed them to Docker Hub, and managed deployment using Kubernetes manifests. Demonstrates real-world microservice deployment, service discovery, and scalable architecture on Kubernetes.',
    techStack: ['Docker', 'Kubernetes', 'AWS EC2', 'Docker Hub', 'kubectl', 'YAML'],
    icon: 'kubernetes',
    github: 'https://github.com/Nitish7040/full-stack_chatApp-k8s',
    live: null,
  },
  {
    name: 'Sample Docker Webpage',
    description: 'Built and deployed a Dockerized web application on AWS using ECR for image storage and ECS Fargate for serverless container orchestration. Configured ALB for traffic distribution, implemented task definitions with logging via CloudWatch, and designed a scalable architecture supporting multi-task high availability.',
    techStack: ['HTML5', 'CSS3', 'Docker', 'AWS ECR', 'ECS Fargate', 'CloudWatch'],
    icon: 'container',
    github: 'https://github.com/Nitish7040/Sample-Docker-Webpage',
    live: null,
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
