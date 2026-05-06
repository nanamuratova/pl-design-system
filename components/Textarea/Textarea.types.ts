import type { TextareaHTMLAttributes } from 'react';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; hint?: string; error?: string; fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
