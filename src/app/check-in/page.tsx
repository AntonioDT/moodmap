"use client";

import { useState } from "react";

import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
import RadioGroup from "@/components/core/RadioGroup";

import MoodSelector from "@/components/mood/MoodSelector";
import TagChips from "@/components/mood/TagChips";
import { Mood } from "@/lib/types";

export default function CheckInPage() {
  const [mood, setMood] = useState<Mood | undefined>();
  const [energy, setEnergy] = useState<number | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const [note, setNote] = useState("");

  function handleSave() {
    const checkIn = {
      mood,
      energy,
      tags,
      note,
      date: new Date(),
    };

    console.log("CHECKIN", checkIn);
  }

  return (
    <main className="container">

      <h1>Check-in di oggi</h1>

      <Card>

        <h3>Come ti senti oggi?</h3>
        <MoodSelector value={mood} onChange={setMood} />

        <hr />

        <h3>Com&apos;è la tua energia?</h3>
        <RadioGroup
          name="energy"
          value={energy}
          onChange={(v) => setEnergy(Number(v))}
          options={[
            { label: "Bassa", value: 1 },
            { label: "Media", value: 2 },
            { label: "Alta", value: 3 },
          ]}
        />

        <hr />

        <h3>Vuoi aggiungere un contesto?</h3>
        <TagChips value={tags} onChange={setTags} />

        <hr />

        <h3>Una nota (se ti va)</h3>
        <input
          type="text"
          placeholder="una riga, libera..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div style={{ marginTop: 24 }}>
          <Button onClick={handleSave} disabled={!mood}>
            Salva check-in
          </Button>
        </div>

      </Card>
    </main>
  );
}