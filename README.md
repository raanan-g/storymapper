# Storymapper Monorepo

This repository lays out the folder structure for the future Storymapper platform.

## Structure

- `apps/` – Front-end applications
  - `web/` – React editor and reader (to be added)
  - `api/` – NestJS app server (to be added)
- `services/` – Backend services
  - `gee-proxy/` – FastAPI microservice (to be added)
- `packages/` – Shared packages
  - `config-schema/` – Zod schemas for Story, Chapter, Action and Layer
  - `map-helpers/` – Mapbox helper utilities
  - `ui/` – Shared UI components
- `strapi/` – Headless CMS project (to be added)
- `legacy/` – Original static template kept for compatibility
- `docker/` – Docker configuration

The legacy static template can still be served statically from the `legacy/` directory.
