import { z } from "zod";

export const Location = z.object({
  center: z.tuple([z.number(), z.number()]),
  zoom: z.number(),
  pitch: z.number(),
  bearing: z.number()
});

export const Action = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("flyTo"),
    params: Location.extend({ durationMs: z.number().optional(), easing: z.string().optional() })
  }),
  z.object({
    type: z.literal("layerOpacity"),
    params: z.object({ layerId: z.string(), opacity: z.number().min(0).max(1), durationMs: z.number().optional() })
  }),
  z.object({
    type: z.literal("setPaint"),
    params: z.object({ layerId: z.string(), paint: z.record(z.any()) })
  }),
  z.object({
    type: z.literal("geeTemporal"),
    params: z.object({ assetId: z.string(), date: z.string(), vis: z.record(z.any()).optional() })
  })
]);

export const Chapter = z.object({
  id: z.string(),
  title: z.string().optional(),
  image: z.string().optional(),
  imageCredit: z.string().optional(),
  bodyHtml: z.string().default(""),
  location: Location,
  enterActions: z.array(Action).default([]),
  exitActions: z.array(Action).default([]),
  durationMs: z.number().optional()
});

export const Layer = z.object({
  id: z.string(),
  sourceId: z.string(),
  type: z.enum(["fill","line","circle","symbol","raster","fill-extrusion"]),
  layout: z.record(z.any()).default({}),
  paint: z.record(z.any()).default({}),
  minzoom: z.number().optional(),
  maxzoom: z.number().optional(),
  beforeId: z.string().optional()
});

export const Story = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  byline: z.string().optional(),
  toptitle: z.string().optional(),
  style: z.string(),
  alignment: z.enum(["left","center","right"]).default("left"),
  theme: z.enum(["light","dark","auto"]).default("auto"),
  accessToken: z.string(),
  initialLocation: Location.optional(),
  chapters: z.array(Chapter),
  layers: z.array(Layer).default([])
});
export type Story = z.infer<typeof Story>;

