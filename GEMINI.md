# Project Guidelines & Rules

## Deployment & Production Safeguards

### Mandatory Approval for Live Deployments and Pushes
- **Never push to live / production without explicit user approval.**
- Always seek clear and explicit confirmation before executing:
  - `git push` to `main`, `master`, or any remote branch configured for automatic live deployment.
  - Production deployments via Vercel CLI (e.g., `vercel --prod`, `vercel deploy --prod`).
  - Merging pull requests or triggering deployment workflows that publish live updates.
- **Allowed without explicit approval:**
  - Running local development servers (`npm run dev`).
  - Running local tests, linting, and build verification (`npm run build`).
  - Creating local git commits on feature/development branches.
