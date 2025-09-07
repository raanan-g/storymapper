import { Body, Controller, Param, Post } from "@nestjs/common";

@Controller("datasources")
export class DataSourcesController {
  @Post(":id/register")
  async register(@Param("id") id: string, @Body() body: any) {
    // TODO: tippecanoe/tileset pipeline; for now return a basic layer
    return {
      layer: {
        id: `layer_${id}`,
        sourceId: `src_${id}`,
        type: "circle",
        layout: {},
        paint: { "circle-radius": 3, "circle-color": "#888" }
      }
    };
  }
}
