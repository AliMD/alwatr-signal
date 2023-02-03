import {contextProvider} from './context-provider.js';
import {setContextProvider} from './core.js';

import type {Stringifyable, OmitFirstParam} from '@alwatr/type';

/**
 * Requestable context provider interface.
 */
export const requestableContextProvider = {
  ...contextProvider,

  /**
   * Defines the provider of the context signal that will be called when the context requested.
   *
   * subscribe to request context signal.
   *
   * Example:
   *
   * ```ts
   * requestableContextProvider.setProvider<ProductListType, RequestParamType>(
   *   'product-list',
   *   async (requestParam) => {
   *     return await fetchNewProductList(requestParam)
   *   },
   * );
   * ```
   */
  setProvider: setContextProvider,

  /**
   * Bind this interface to special context.
   *
   * Example:
   *
   * ```ts
   * const productListProvider = requestableContextProvider.bind<ProductListType>('product-list');
   * ```
   */
  bind: <TContext extends Stringifyable, TRquest extends Stringifyable>(contextId: string) =>({
    ...contextProvider.bind<TContext>(contextId),

    /**
     * Defines the provider of the context signal that will be called when the context requested.
     *
     * subscribe to request context signal.
     *
     * Example:
     *
     * ```ts
     * productListProvider.setProvider(async (requestParam) => {
     *   return await fetchNewProductList(requestParam)
     * });
     * ```
     */
    setProvider: setContextProvider.bind(null, contextId) as
      OmitFirstParam<typeof setContextProvider<TContext, TRquest>>,
  } as const),
} as const;