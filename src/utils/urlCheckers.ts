export const isImgUrl = (path: string): boolean => /\.(jpeg|jpg|gif|png|webp)$/i.test(path);
export const isVideoUrl = (path: string): boolean => /\.mp4$/i.test(path);
