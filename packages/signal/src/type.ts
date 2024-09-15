import type {Dictionary, MaybePromise} from '@alwatr/type-helper';

/**
 * Subscribe options type.
 */
export interface SubscribeOptions {
  /**
   * If true, the listener will be called only once.
   */
  once?: true;

  /**
   * If true, the listener will be called before other.
   */
  priority?: true;

  /**
   * If true, the listener will be defined disabled by default.
   */
  disabled?: true;

  /**
   * If true, calls the listener (callback) with previous signal value (if dispatched before).
   */
  receivePrevious?: boolean;

  /**
   * If defined, calls the listener (callback) with debounce.
   */
  // debounce?: 'AnimationFrame' | number;
}

export type ListenerCallback<T, M extends Dictionary = Dictionary> = (this: T, message: M) => MaybePromise<void>;

export interface Observer<T, M extends Dictionary = Dictionary> {
  callback: ListenerCallback<T, M>;
  options: SubscribeOptions;
}

export interface SubscribeResult {
  unsubscribe: () => void;
}

export interface AlwatrObservableInterface<T extends Dictionary = Dictionary> {
  subscribe(listenerCallback: ListenerCallback<this, T>, options?: SubscribeOptions): SubscribeResult;
  unsubscribe(listenerCallback: ListenerCallback<this, T>): void;
}
