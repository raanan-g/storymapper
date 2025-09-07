// MIT License - see LICENSE file in the repository root for details.
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { runChapterEnter } from "@story/map-helpers";

export function MapCanvas({ story }: any){
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map|null>(null);

  useEffect(()=>{
    if(!ref.current) return;
    mapboxgl.accessToken = story.accessToken;
    const map = new mapboxgl.Map({
      container: ref.current,
      style: story.style,
      center: story.initialLocation?.center,
      zoom: story.initialLocation?.zoom,
      pitch: story.initialLocation?.pitch ?? 0,
      bearing: story.initialLocation?.bearing ?? 0
    });
    mapRef.current = map;
    map.on("load", async ()=> {
      // Add a stub raster source we can retarget
      if (!map.getSource("gee")) {
        map.addSource("gee", {
          type: "raster",
          tiles: ["http://localhost:8090/tiles/{z}/{x}/{y}.png"],
          tileSize: 256
        });
        map.addLayer({ id: "gee-raster", type: "raster", source: "gee", paint: { "raster-opacity": 0.6 } });
      }
      const active = story.chapters[0];
      if (active) {
        runChapterEnter(map, active);
        for (const a of active.enterActions.filter((a: any) => a.type === "geeTemporal")) {
          const resp = await fetch(`http://localhost:8090/mapid?asset=${a.params.assetId}&date=${encodeURIComponent(a.params.date)}`);
          const data = await resp.json();
          const src = map.getSource("gee") as any;
          src?.setTiles?.([data.url]);
        }
      }
    });
    return ()=> map.remove();
  },[story]);

  return <div ref={ref} className="w-full h-full" />;
}
