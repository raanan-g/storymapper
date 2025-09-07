import StoryViewer from "./viewer/StoryViewer";
const demo:any = {
  accessToken: "REPLACE_ME",
  style: "mapbox://styles/mapbox/light-v11",
  initialLocation: { center: [-98, 39], zoom: 3, pitch: 0, bearing: 0 },
  chapters: [{ id:"c0", title:"Hello", bodyHtml:"<p>Demo</p>", location:{ center:[-98,39], zoom:3, pitch:0, bearing:0 }, enterActions:[], exitActions:[] }],
  layers: []
};
export default function App(){ return <StoryViewer story={demo}/>; }

