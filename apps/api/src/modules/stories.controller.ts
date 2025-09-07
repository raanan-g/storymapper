import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { Story as StorySchema } from "@story/config-schema";

async function fetchJson(url: string) {
  return fetch(url)
    .then(r => r.json())
    .catch(() => null);
}

@Controller("stories")
export class StoriesController {
  @Get(":slug/config")
  async config(@Param("slug") slug: string) {
    // Example Strapi REST filter; adjust to your content-type & fields
    const base = process.env.STRAPI_BASE || "http://localhost:1337/api";
    const story = await fetchJson(`${base}/stories?filters[slug][$eq]=${slug}&populate=deep`);
    const s = story?.data?.[0]?.attributes;
    // TODO: map Strapi shape -> StorySchema.parse(...)
    const out: any = {
      slug,
      title: s?.title ?? slug,
      accessToken: process.env.MAPBOX_TOKEN || "REPLACE_ME",
      style: s?.style || "mapbox://styles/mapbox/light-v11",
      alignment: s?.alignment || "left",
      theme: s?.theme || "auto",
      initialLocation: s?.initialLocation,
      layers: s?.layers || [],
      chapters: (s?.chapters || []).map((c: any) => ({
        id: c.id || c.slug || "chapter",
        title: c.title,
        bodyHtml: c.bodyHtml || "",
        location: c.location,
        enterActions: c.enterActions || [],
        exitActions: c.exitActions || []
      }))
    };
    return out as StorySchema;
  }

  @Put(":slug")
  async update(@Param("slug") slug: string, @Body() body: any) {
    // TODO: forward to Strapi; stub OK
    return { ok: true, slug, received: body };
  }
}
