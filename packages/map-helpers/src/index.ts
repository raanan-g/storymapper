import mapboxgl from "mapbox-gl";

export function applyAction(map: mapboxgl.Map, action: any) {
  switch (action.type) {
    case "flyTo":
      map.flyTo(action.params);
      break;
    case "layerOpacity": {
      const { layerId, opacity } = action.params;
      const layer = map.getLayer(layerId);
      if (!layer) return;
      const type = (layer as any).type;
      const props: Record<string, string[]> = {
        fill: ["fill-opacity"],
        line: ["line-opacity"],
        circle: ["circle-opacity", "circle-stroke-opacity"],
        symbol: ["icon-opacity", "text-opacity"],
        raster: ["raster-opacity"],
        "fill-extrusion": ["fill-extrusion-opacity"],
      };
      (props[type] || []).forEach((p) => map.setPaintProperty(layerId, p as any, opacity));
      break;
    }
    case "setPaint": {
      const { layerId, paint } = action.params;
      Object.entries(paint).forEach(([k, v]) => map.setPaintProperty(layerId, k as any, v as any));
      break;
    }
    case "geeTemporal":
      // handled via source update in app code
      break;
  }
}

export const runChapterEnter = (map: mapboxgl.Map, ch: any) =>
  ch.enterActions.forEach((a: any) => applyAction(map, a));

export const runChapterExit = (map: mapboxgl.Map, ch: any) =>
  ch.exitActions.forEach((a: any) => applyAction(map, a));
