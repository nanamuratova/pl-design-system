'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import type { SliderProps } from './Slider.types';
import styles from './Slider.module.scss';

export function Slider({ color = 'blue', size = 'md', className, value, defaultValue = [0], ...props }: SliderProps) {
  const thumbCount = (value ?? defaultValue).length;
  return (
    <SliderPrimitive.Root
      className={clsx(styles.root, styles[`size-${size}`], styles[color], className)}
      value={value} defaultValue={defaultValue} {...props}
    >
      <SliderPrimitive.Track className={clsx(styles.track, styles[`track-${size}`])}>
        <SliderPrimitive.Range className={styles.range} />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }).map((_, i) => (
        <SliderPrimitive.Thumb key={i} className={clsx(styles.thumb, styles[`thumb-${size}`])} aria-label={`Thumb ${i + 1}`} />
      ))}
    </SliderPrimitive.Root>
  );
}
