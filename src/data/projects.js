// ============================================================
// PROJECT DATA — Edit this file to add/modify real projects
// ============================================================

const projects = [
  {
    id: 'galleryone',
    title: 'GalleryOne',
    category: 'mern',
    description:
      'A full-stack image gallery management platform with user authentication, image uploads via AWS S3, gallery organization, favorites, and subscription-based storage management.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS S3', 'JWT', 'REST API'],
    features: [
      'User authentication & authorization',
      'Image upload with AWS S3 storage',
      'Gallery creation & management',
      'Favorites & collections',
      'Subscription-based storage tiers',
      'User dashboard & profile management',
      'Responsive UI',
    ],
    github: 'https://github.com/Nitish7040',
    liveDemo: null,
    icon: 'gallery',
    featured: true,
    isDemo: false,
    caseStudy: {
      problem:
        'Users needed a centralized platform to upload, organize, and manage image galleries with cloud storage, without relying on fragmented third-party tools.',
      solution:
        'Built a full-stack application using React for the frontend, Node.js/Express for the backend API, PostgreSQL for relational data, and AWS S3 for scalable image storage.',
      architecture:
        'Three-tier architecture: React SPA frontend communicating with an Express.js REST API backend, connected to PostgreSQL for user/gallery data and AWS S3 for image blob storage.',
      challenges: [
        'Implementing secure pre-signed URL uploads to S3',
        'Managing storage quota per subscription tier',
        'Optimizing image loading with lazy loading and thumbnails',
      ],
      learned: [
        'AWS S3 integration patterns for file uploads',
        'Database schema design for relational gallery structures',
        'JWT-based authentication flow implementation',
      ],
      deployment:
        'Hosted frontend on S3/CloudFront with backend APIs running on a cloud compute instance connected to a managed PostgreSQL database.',
    },
  },

  {
    id: 'terminal-portfolio',
    title: 'Terminal Style Portfolio — AWS Deployment',
    category: 'aws',
    description:
      'A personal portfolio with a terminal-inspired UI, simulating command-line interactions to showcase projects and skills. Deployed on AWS S3 + CloudFront for global delivery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AWS S3', 'CloudFront', 'GitHub'],
    features: [
      'Terminal-inspired interactive UI',
      'Command-line simulation',
      'AWS S3 static hosting',
      'CloudFront CDN distribution',
      'Responsive design',
    ],
    github: 'https://github.com/Nitish7040/Nitish_Portfolio',
    liveDemo: 'https://nitishpandey.site/',
    icon: 'terminal',
    featured: true,
    isDemo: false,
    caseStudy: {
      problem:
        'Wanted to create a unique developer portfolio that stands out from template-based designs and demonstrates both frontend skills and cloud deployment knowledge.',
      solution:
        'Designed a terminal-themed interface with interactive commands, deployed on AWS cloud infrastructure with S3 for hosting and CloudFront for CDN.',
      architecture:
        'Static site hosted on AWS S3, served through CloudFront CDN with custom domain configuration and SSL.',
      challenges: [
        'Creating an authentic terminal experience in the browser',
        'Configuring S3 bucket policies for static website hosting',
        'Setting up CloudFront distribution with custom domain',
      ],
      learned: [
        'AWS S3 static website hosting configuration',
        'CloudFront CDN setup and cache invalidation',
        'Custom domain and SSL certificate management',
      ],
      deployment:
        'Automated CI/CD pipeline via GitHub Actions deploying to AWS S3 bucket with CloudFront global CDN distribution and SSL certificate management.',
    },
  },

  {
    id: 'auth-settings-api',
    title: 'User Authentication & Settings API',
    category: 'mern',
    description:
      'A backend REST API for user authentication, profile management, and settings. Built with Node.js, Express, MongoDB, and JWT for secure token-based auth.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'bcrypt'],
    features: [
      'User registration & login',
      'JWT token-based authentication',
      'Password hashing with bcrypt',
      'Profile management endpoints',
      'User preferences & settings',
      'Protected API routes with middleware',
      'Input validation & error handling',
    ],
    github: 'https://github.com/Nitish7040',
    liveDemo: null,
    icon: 'auth',
    featured: false,
    isDemo: false,
    caseStudy: null,
  },

  {
    id: 'valentine-k8s',
    title: 'Valentine Project — React (K8s Deployment)',
    category: 'devops',
    isAcademic: true,
    description:
      'A responsive Valentine-themed React app containerized with Docker and deployed on an EC2-hosted Kubernetes (Kind) cluster with proper namespace isolation and service exposure.',
    technologies: ['React.js', 'Tailwind CSS', 'Docker', 'Kubernetes', 'AWS EC2', 'kubectl'],
    features: [
      'Responsive Valentine-themed UI',
      'Docker containerization',
      'Kubernetes deployment on Kind cluster',
      'Namespace resource isolation',
      'Service exposure via Kubernetes',
    ],
    github: 'https://github.com/Nitish7040',
    liveDemo: null,
    icon: 'kubernetes',
    featured: false,
    isDemo: false,
    caseStudy: null,
  },

  {
    id: 'chat-app-k8s',
    title: 'Full-Stack Chat App — K8s Deployment',
    category: 'devops',
    isAcademic: true,
    description:
      'A 3-tier chat application deployed on a Kubernetes cluster running on EC2. Docker images built for frontend and backend, pushed to Docker Hub, with Kubernetes manifests managing the microservice architecture.',
    technologies: ['Docker', 'Kubernetes', 'AWS EC2', 'Docker Hub', 'kubectl', 'YAML'],
    features: [
      'Multi-tier microservice architecture',
      'Docker containerization for frontend & backend',
      'Kubernetes orchestration on Kind cluster',
      'Service discovery between containers',
      'Docker Hub image registry',
    ],
    github: 'https://github.com/Nitish7040/full-stack_chatApp-k8s',
    liveDemo: null,
    icon: 'kubernetes',
    featured: false,
    isDemo: false,
    caseStudy: null,
  },

  {
    id: 'docker-webpage',
    title: 'Sample Docker Webpage — ECS Fargate',
    category: 'aws',
    description:
      'A Dockerized web app deployed on AWS using ECR for image storage and ECS Fargate for serverless container orchestration. ALB handles traffic distribution with CloudWatch monitoring.',
    technologies: ['HTML5', 'CSS3', 'Docker', 'AWS ECR', 'ECS Fargate', 'CloudWatch'],
    features: [
      'Docker containerization',
      'AWS ECR image registry',
      'ECS Fargate serverless deployment',
      'Application Load Balancer',
      'CloudWatch logging & monitoring',
      'Multi-task high availability',
    ],
    github: 'https://github.com/Nitish7040/Sample-Docker-Webpage',
    liveDemo: null,
    icon: 'container',
    featured: false,
    isDemo: false,
    caseStudy: null,
  },
]

export default projects
