import { Controller, Get, Param } from "@nestjs/common";

@Controller("export")
export class ExportController {
  @Get(":slug/config.js")
  async js(@Param("slug") slug: string) {
    const cfg = await fetch(
      `${process.env.API_BASE || "http://localhost:8080/api"}/stories/${slug}/config`
    ).then(r => r.json());
    return `window.storyConfig = ${JSON.stringify(cfg, null, 2)};`;
  }
}
