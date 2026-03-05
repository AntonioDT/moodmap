import { Mood } from "./types";

export function getMoodClass(mood: Mood) {
  switch (mood) {
    case Mood.VeryBad:
      return "mood-very-bad";
    case Mood.Neutral:
      return "mood-neutral";
    case Mood.Good:
      return "mood-good";
    case Mood.VeryGood:
      return "mood-very-good";
  }
}