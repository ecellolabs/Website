const siteOrigin = "https://ecello.net";

export function getSiteUrl(path = "/") {
  if (!path || path === "/") {
    return siteOrigin;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;
}

export const siteUrl = getSiteUrl();
