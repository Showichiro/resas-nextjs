/**
 * check client or server
 * @returns isServer
 */
export const isServer = () => typeof window === 'undefined';

/**
 * check client or server
 * @returns isClient
 */
export const isClient = () => typeof window !== 'undefined';
