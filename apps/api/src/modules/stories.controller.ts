import { Controller, Get, Param } from "@nestjs/common";
import { Story } from "@story/config-schema";

const sample: Story = {
  slug: "demo",
  title: "Demo Story",
  accessToken: "REPLACE_ME",
  style: "mapbox://styles/mapbox/light-v11",
  alignment: "left",
  theme: "auto",
  chapters: [{
    id:"c0", title:"Welcome", bodyHtml:"<p>Demo</p>",
    location:{ center:[-98,39], zoom:3, pitch:0, bearing:0 },
    enterActions:[], exitActions:[]
  }],
  layers: []
};

@Controller("stories")
export class StoriesController {
  @Get(":slug/config")
  config(@Param("slug") slug: string) {
    // TODO: fetch from CMS; for now return sample
    return sample;
  }
}
