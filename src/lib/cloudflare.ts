const STREAM_CUSTOMER = process.env.NEXT_PUBLIC_CF_STREAM_CUSTOMER ?? "";
const IMAGES_ACCOUNT_HASH =
  process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH ?? "";

const streamBase = STREAM_CUSTOMER
  ? `https://customer-${STREAM_CUSTOMER}.cloudflarestream.com`
  : "";

/** Progressive MP4 rendition served from Cloudflare Stream. */
export function streamMp4(uid: string): string {
  if (!streamBase || !uid) return "";
  return `${streamBase}/${uid}/downloads/default.mp4`;
}

/** HLS manifest served from Cloudflare Stream. */
export function streamHls(uid: string): string {
  if (!streamBase || !uid) return "";
  return `${streamBase}/${uid}/manifest/video.m3u8`;
}

/** Cloudflare Stream player embed for full-frame playback. */
export function streamEmbed(uid: string): string {
  if (!streamBase || !uid) return "";
  return `${streamBase}/${uid}/iframe`;
}

/**
 * Cloudflare Images delivery URL. `variant` maps to a named variant in the
 * Cloudflare dashboard (e.g. "hero", "thumb", "public").
 */
export function cfImage(imageId: string, variant = "public"): string {
  if (!IMAGES_ACCOUNT_HASH || !imageId) return "";
  return `https://imagedelivery.net/${IMAGES_ACCOUNT_HASH}/${imageId}/${variant}`;
}
