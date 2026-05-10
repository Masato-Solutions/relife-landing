export const DEFAULT_LOGO_TEXT = "RL";

const HTTP_URL_PATTERN = /^https?:\/\/\S+$/i;
const UPLOADS_PATH_PATTERN = /^\/uploads\/[a-zA-Z0-9._/-]+$/;

export function isSafeLogoImageUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (UPLOADS_PATH_PATTERN.test(trimmed)) return true;

  if (HTTP_URL_PATTERN.test(trimmed)) {
    try {
      const parsed = new URL(trimmed);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  }

  return false;
}
