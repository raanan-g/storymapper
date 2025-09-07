import { useState } from "react";
import StoryViewer from "../viewer/StoryViewer";
import { ChapterList } from "./ChapterList";
import { RichEditor } from "./RichEditor";

// Basic editor layout with a stubbed save action

export default function StoryEditor({ story: initialStory }: { story: any }) {
  const [story, setStory] = useState<any>(initialStory);
  return (
    <div className="grid grid-cols-12 h-screen">
      <header className="col-span-12 border-b p-2 flex justify-between">
        <div className="font-semibold">{story.title}</div>
        <button
          onClick={async () => {
            await fetch(import.meta.env.VITE_API_BASE + `/stories/${story.slug}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(story)
            });
          }}
          className="border rounded px-3 py-1"
        >
          Save
        </button>
      </header>
      <aside className="col-span-2 border-r">
        <ChapterList story={story} onChange={setStory} />
      </aside>
      <main className="col-span-6">
        <StoryViewer story={story} />
      </main>
      <section className="col-span-4 border-l">
        <RichEditor story={story} onChange={setStory} />
      </section>
    </div>
  );
}
