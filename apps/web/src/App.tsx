import { useEffect, useState } from "react";
import StoryViewer from "./viewer/StoryViewer";

export default function App(){
  const [story, setStory] = useState<any|null>(null);
  useEffect(()=>{
    fetch(import.meta.env.VITE_API_BASE + "/stories/demo/config")
      .then(r=>r.json()).then(setStory);
  },[]);
  if(!story) return <div className="p-6">Loading…</div>;
  return <StoryViewer story={story}/>;
}
