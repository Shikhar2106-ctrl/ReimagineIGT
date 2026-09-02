/**
 * Resolves static asset paths (images, media videos, logos) for GitHub Pages base URL
 * @param {string} path - Asset path (e.g. '/images/hero/frame-1.png')
 * @returns {string} - Full base-aware asset URL
 */
export function getAssetUrl(path) {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get base URL from Vite (e.g. '/ReimagineIGT/' on GitHub Pages, '/' on local dev)
  let baseUrl = import.meta.env.BASE_URL || '/';
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }

  return `${baseUrl}${cleanPath}`;
}
