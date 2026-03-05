"use client";

import styles from './Chip.module.scss';

type ChipProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function Chip({ label, selected = false, onClick }: ChipProps) {
  return (
    <button
      className={`${styles.chip} ${selected ? styles['chip--selected'] : ""}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}