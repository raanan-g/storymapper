export function ChapterList({ story, onChange: _onChange }: { story: any; onChange: (s: any) => void }) {
  return (
    <div className="p-2 text-sm">
      Chapters: {story.chapters?.length ?? 0}
    </div>
  );
}
