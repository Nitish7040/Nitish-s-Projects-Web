import { useScrollReveal } from '../hooks/useScrollReveal'

const pipelineNodes = [
  { step: '01', title: 'DEVELOPER', sub: 'Git Commit & Push', icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
  { step: '02', title: 'GITHUB MAIN', sub: 'Version Trigger', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18z' },
  { step: '03', title: 'ACTIONS WORKFLOW', sub: 'CI Runner Node', icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992' },
  { step: '04', title: 'BUILD & TEST', sub: 'Automated Suite', icon: 'M9 12.75L11.25 15 15 9.75' },
  { step: '05', title: 'AWS DEPLOYMENT', sub: 'S3 Sync & Invalidate', icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257' },
  { step: '06', title: 'CLOUDWATCH', sub: 'Logging & Metrics', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25' },
]

const awsServices = [
  { name: 'Amazon S3', role: 'Static Website Hosting & Image Blob Storage' },
  { name: 'Amazon CloudFront', role: 'Global CDN Distribution & Edge Caching' },
  { name: 'Amazon EC2', role: 'Containerized Backend & Kubernetes Clusters' },
  { name: 'AWS IAM & Cognito', role: 'Role Policies & OAuth User Authentication' },
  { name: 'Amazon API Gateway', role: 'REST API Management & Route Caching' },
  { name: 'AWS CloudWatch', role: 'Infrastructure Log Streams & Resource Metrics' },
]

function AwsDevops() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="aws-devops"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag-cyan">06 / CLOUD ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            AWS &amp; <span className="text-cyan">DEVOPS PIPELINE</span>
          </h2>
          <p className="section-desc">
            Automated deployment workflows and cloud infrastructure management for application reliability.
          </p>
        </div>

        {/* Technical Pipeline Flow Diagram */}
        <div className="mt-12 space-y-8">
          <div className="editorial-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-brand-border pb-4 font-mono text-xs text-cyan">
              <span>AUTOMATED CI/CD ARCHITECTURE</span>
              <span>GITHUB ACTIONS → AWS S3 + CLOUDFRONT</span>
            </div>

            {/* Desktop Pipeline Flow */}
            <div className="hidden lg:grid grid-cols-6 gap-2 relative">
              {pipelineNodes.map((node, i) => (
                <div key={node.step} className="editorial-card p-4 bg-brand-bg relative group">
                  <div className="flex items-center justify-between text-[10px] font-mono text-text-muted mb-2">
                    <span className="text-cyan">{node.step}</span>
                    <span>{i < 5 ? '→' : 'END'}</span>
                  </div>
                  <h4 className="text-xs font-bold font-display text-text-primary tracking-tight group-hover:text-cyan transition-colors duration-200">
                    {node.title}
                  </h4>
                  <p className="text-[10px] font-mono text-text-muted mt-1">{node.sub}</p>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet Pipeline Flow */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pipelineNodes.map((node) => (
                <div key={node.step} className="editorial-card p-4 bg-brand-bg flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-cyan">{node.step}</span>
                  <div>
                    <h4 className="text-xs font-bold font-display text-text-primary">{node.title}</h4>
                    <p className="text-[10px] font-mono text-text-muted">{node.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AWS Cloud Services Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest">
              AWS INFRASTRUCTURE &amp; CLOUD SERVICES UTILIZED
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awsServices.map((service) => (
                <div key={service.name} className="editorial-card p-5 space-y-2">
                  <h4 className="text-sm font-bold font-display text-text-primary flex items-center justify-between">
                    <span>{service.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  </h4>
                  <p className="text-xs font-mono text-text-secondary">{service.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwsDevops
