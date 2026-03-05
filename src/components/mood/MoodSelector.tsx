"use client";

import { Mood } from "@/lib/types";
import styles from "./MoodSelector.module.scss";



type MoodSelectorProps = {
  value?: Mood;
  onChange?: (mood: Mood) => void;
};

const moods = [
  { value: Mood.VeryBad, emoji: "😞", label: "molto giù" },
  { value: Mood.Neutral, emoji: "😐", label: "così così" },
  { value: Mood.Good, emoji: "🙂", label: "bene" },
  { value: Mood.VeryGood, emoji: "😄", label: "molto bene" },
];

export default function MoodSelector({ value, onChange }: MoodSelectorProps) {
  return (
    <div className={styles.container}>
      {moods.map((mood) => (
        <button
          key={mood.value}
          type="button"
          data-mood={mood.value}
          className={`${styles.mood} ${
            value === mood.value ? styles.selected : ""
          }`}
          onClick={() => onChange?.(mood.value)}
        >
          <span className={styles.emoji}>{mood.emoji}</span>
          <span className={styles.label}>{mood.label}</span>
        </button>
      ))}
    </div>
  );
}