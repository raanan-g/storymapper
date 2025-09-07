import { Module } from "@nestjs/common";
import { StoriesController } from "./stories.controller";
import { UploadsController } from "./uploads.controller";
import { DataSourcesController } from "./datasources.controller";
import { ExportController } from "./export.controller";

@Module({
  controllers: [StoriesController, UploadsController, DataSourcesController, ExportController],
  providers: []
})

export class AppModule {}
