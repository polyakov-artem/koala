export type TGetFirstPathNamePart = (params: { hasPublicPath: boolean }) => string | null;

export const getFirstPathNamePart: TGetFirstPathNamePart = ({ hasPublicPath }) => {
  const part = window.location.pathname.split('/')[hasPublicPath ? 2 : 1];
  return !part ? null : part;
};
