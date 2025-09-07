import { Module } from "@nestjs/common";
import { StoriesController } from "./stories.controller";
@Module({ controllers: [StoriesController], providers: [] })
export class AppModule {}
