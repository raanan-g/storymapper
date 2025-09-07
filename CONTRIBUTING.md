# Contributing

## Local development

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Build all packages and apps

   ```bash
   pnpm build
   ```

3. Run the development stack (API, web, GEE proxy, Postgres, Strapi)

   ```bash
   docker compose -f docker/compose.dev.yml up
   ```

4. Work on individual packages/apps

   ```bash
   pnpm -F storymapper-api dev
   pnpm -F storymapper-web dev
   pnpm dev:legacy
   ```

Please open pull requests with clear summaries and run the above commands before submitting.
