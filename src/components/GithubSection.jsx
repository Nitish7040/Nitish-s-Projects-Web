import { useScrollReveal } from '../hooks/useScrollReveal'

const repos = [
  { name: 'Nitish_Portfolio', description: 'Terminal-inspired developer portfolio hosted on AWS S3 & CloudFront', language: 'JavaScript / AWS' },
  { name: 'full-stack_chatApp-k8s', description: '3-tier multi-container chat application running on Kubernetes cluster', language: 'Docker / K8s' },
  { name: 'Sample-Docker-Webpage', description: 'Containerized web application orchestrated with AWS ECR & ECS Fargate', language: 'Docker / AWS ECS' },
]

function GithubSection() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="github"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag">08 / CODE &amp; REPOSITORIES</span>
          </div>
          <h2 className="section-title">
            OPEN SOURCE &amp; <span className="text-accent">GITHUB</span>
          </h2>
          <p className="section-desc">
            Codebases and repositories available publicly on GitHub.
          </p>
        </div>

        {/* Repositories List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={`https://github.com/Nitish7040/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`editorial-card-interactive p-6 space-y-4 flex flex-col justify-between group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 80}ms` : '0ms' }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-text-muted">REPOSITORY</span>
                  <span className="text-accent">↗</span>
                </div>
                <h3 className="text-base font-bold font-mono text-text-primary group-hover:text-accent transition-colors duration-200">
                  {repo.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border flex items-center justify-between font-mono text-xs">
                <span className="text-text-muted">STACK:</span>
                <span className="text-text-primary">{repo.language}</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Nitish7040"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Visit GitHub Profile (@Nitish7040) →
          </a>
        </div>
      </div>
    </section>
  )
}

export default GithubSection
