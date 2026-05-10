export const DEFAULT_LOGO_TEXT = "RL";
export const MAX_LOGO_FILE_SIZE_BYTES = 10 * 1024 * 1024;

const UPLOADS_PATH_PATTERN = /^\/uploads\/[a-zA-Z0-9_-]+\.(png|jpe?g|webp|gif|svg)$/i;

export function toSafeUploadsLogoSrc(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.includes("..")) return null;
  if (!UPLOADS_PATH_PATTERN.test(trimmed)) return null;
  return trimmed;
}

export function isSafeLogoImageUrl(value: string): boolean {
  return toSafeUploadsLogoSrc(value) !== null;
}
