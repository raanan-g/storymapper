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
    map.on("load", ()=> {
      const active = story.chapters[0];
      if (active) runChapterEnter(map, active);
    });
    return ()=> map.remove();
  },[story]);

  return <div ref={ref} className="w-full h-full" />;
}
