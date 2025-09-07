import { MapCanvas } from "./MapCanvas";
export default function StoryViewer({ story }: any){
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-8"><MapCanvas story={story}/></div>
      <div className="col-span-4 p-4 overflow-auto">
        {story.chapters.map((c:any)=>(
          <article key={c.id} className="mb-6">
            {c.title && <h2 className="font-semibold">{c.title}</h2>}
            <div dangerouslySetInnerHTML={{__html: c.bodyHtml || ""}}/>
          </article>
        ))}
      </div>
    </div>
  );
}
