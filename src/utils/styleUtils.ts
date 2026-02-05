export function createStyleId(prefix: string): string {
  const suffix = Math.random().toString(36).slice(2, 10);
  return `${prefix}-${suffix}`;
}

export function escapeCssString(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function toCssUrl(value?: string): string {
  const trimmed = value?.trim() ?? '';
  if (!trimmed) return 'none';
  return `url("${escapeCssString(trimmed)}")`;
}

export function normalizeBackgroundSize(value?: string): 'cover' | 'contain' | 'auto' {
  if (value === 'contain' || value === 'auto') return value;
  return 'cover';
}

export function normalizeBackgroundPosition(value?: string): string {
  const trimmed = value?.trim() ?? '';
  if (!trimmed) return 'center';
  return /^[a-z0-9% ,.-]+$/i.test(trimmed) ? trimmed : 'center';
}
