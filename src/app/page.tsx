"use client";

import { useState } from "react";
import MoodSelector, { Mood } from "@/components/mood/MoodSelector";
import Card from "@/components/core/Card";

export default function Home() {
  const [mood, setMood] = useState<Mood | undefined>();

  return (
    <main className="container">
      <Card>
        <h3>Come ti senti oggi?</h3>

        <MoodSelector value={mood} onChange={setMood} />
      </Card>
    </main>
  );
}