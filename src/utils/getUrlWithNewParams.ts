export const getUrlWithNewParams = (params: Record<string, string | null | undefined>): string => {
  const currentUrl = new URL(window.location.href);

  const newParams = new URLSearchParams([...currentUrl.searchParams.entries()]);
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
  });

  return `${currentUrl.origin}${currentUrl.pathname}?${newParams.toString()}`;
};
