# Storymapper Monorepo

This repository lays out the folder structure for the future Storymapper platform.

## Structure

- `apps/` – Front-end applications
  - `web/` – React editor and reader
  - `api/` – NestJS app server
- `services/` – Backend services
  - `gee-proxy/` – FastAPI microservice
- `packages/` – Shared packages
  - `config-schema/` – Zod schemas for Story, Chapter, Action and Layer
  - `map-helpers/` – Mapbox helper utilities
  - `ui/` – Shared UI components
- `strapi/` – Headless CMS project scaffold
- `legacy/` – Original static template kept for compatibility
- `docker/` – Docker configuration

## Development

Install dependencies with `pnpm install`. Build all packages with `pnpm build`.

Run individual apps with:

```bash
pnpm -F storymapper-api dev
pnpm -F storymapper-web dev
```

Run the GEE proxy locally:

```bash
uvicorn services.gee-proxy.main:app --reload --port 8090
```

To launch the whole stack (API, web, GEE stub, Postgres and Strapi), run:

```bash
docker compose -f docker/compose.dev.yml up
```

To preview the legacy static template, run `pnpm dev:legacy` and open [http://localhost:5170](http://localhost:5170).
