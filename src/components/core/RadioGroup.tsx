"use client";

import styles from './RadioGroup.module.scss';

type Option = {
  label: string;
  value: string | number;
};

type RadioGroupProps = {
  name: string;
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
};

export default function RadioGroup({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className={styles['radio-group']}>
      {options.map((option) => (
        <label key={option.value} className={styles.radio}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
          />

          <span className="radio__label">{option.label}</span>
        </label>
      ))}
    </div>
  );
}