"use client";

import Chip from "@/components/core/Chip";
import styles from "./TagChips.module.scss";

type Tag = {
  key: string;
  label: string;
};

type TagChipsProps = {
  value?: string[];
  onChange?: (tags: string[]) => void;
};

const TAGS: Tag[] = [
  { key: "work", label: "Lavoro" },
  { key: "relations", label: "Relazioni" },
  { key: "health", label: "Salute" },
  { key: "stress", label: "Stress" },
  { key: "rest", label: "Riposo" },
  { key: "other", label: "Altro" },
];

export default function TagChips({ value = [], onChange }: TagChipsProps) {
  function toggleTag(tagKey: string) {
    let newTags: string[];

    if (value.includes(tagKey)) {
      newTags = value.filter((t) => t !== tagKey);
    } else {
      newTags = [...value, tagKey];
    }

    onChange?.(newTags);
  }

  return (
    <div className={styles.container}>
      {TAGS.map((tag) => (
        <Chip
          key={tag.key}
          label={tag.label}
          selected={value.includes(tag.key)}
          onClick={() => toggleTag(tag.key)}
        />
      ))}
    </div>
  );
}