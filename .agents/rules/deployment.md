# Deployment Safeguards

- **Never push or deploy live without explicit approval from the user.**
- Do not run `vercel --prod` or push to branches connected to live/production environments (`main`, `master`) unless the user explicitly requests or confirms it in the prompt.
- Always check with the user and describe what will be published before triggering any live release.
