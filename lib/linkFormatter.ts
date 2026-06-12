function formatDisplayUrl(url: string): string {
  if (!url) return "";

  return url.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");
}

export { formatDisplayUrl };
