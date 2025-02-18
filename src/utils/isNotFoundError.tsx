export type TError = { status: number };

export const isNotFoundError = (obj: unknown): obj is TError => {
  if ((obj as TError)?.status === 404) {
    return true;
  }

  return false;
};
