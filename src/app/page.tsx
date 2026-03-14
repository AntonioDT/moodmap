"use client";

import { useState } from "react";
import Card from "@/components/core/Card";
import TagChips from "@/components/mood/TagChips";

export default function Home() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <main className="container">
      <Card>
        <h3>Vuoi aggiungere un contesto?</h3>

        <TagChips value={tags} onChange={setTags} />

        <pre>{JSON.stringify(tags, null, 2)}</pre>
      </Card>
    </main>
  );
}