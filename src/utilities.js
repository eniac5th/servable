export const noop = () => null;

export * from './utilities/makeHot';

export const isPromise = (p) => p !== null && typeof p === 'object' && typeof p.then === 'function';

export const isObservable = (o$) => o$ !== null && typeof o$ === 'object' && typeof o$.subscribe === 'function';
