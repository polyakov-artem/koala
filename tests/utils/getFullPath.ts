import { PUBLIC_PATH } from '../../src/constants/constants';

export const getFullPath = (...args: string[]): string => PUBLIC_PATH + args.join('/');
