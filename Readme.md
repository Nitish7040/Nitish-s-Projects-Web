
# Nitish's Projects

Welcome to my projects portfolio. This repository showcases a collection of my web development projects and experiments.

## Deployment

To deploy the production build to AWS S3, use the following commands:

```bash
# Sync the dist folder with the S3 bucket and remove deleted files
aws s3 sync dist/ s3://nitishs-projects-website --del
```

