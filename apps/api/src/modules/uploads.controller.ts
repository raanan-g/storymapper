import { Controller, Post } from "@nestjs/common";

@Controller("uploads")
export class UploadsController {
  @Post()
  async upload() {
    return { id: "ds_123", kind: "upload", format: "geojson", url: "/s3/fake.geojson" };
  }
}
