import {
  AlwatrRemoteContextStateMachineBase as AlwatrManualReloadRemoteContextStateMachineBase,
  type ServerContextState,
} from './base.js';

import type {FetchOptions} from '@alwatr/flux';
import type {Json} from '@alwatr/type-helper';

export class AlwatrManualReloadRemoteContextStateMachine<T extends Json = Json> extends AlwatrManualReloadRemoteContextStateMachineBase<T> {
  /**
   * Current state.
   */
  get state(): ServerContextState {
    return this.message_.state;
  }

  get context(): T | undefined {
    return this.context_;
  }

  get isLoadedFromRemote(): boolean {
    return this.isLoadedFromRemote_;
  }

  request(fetchOptions?: Partial<FetchOptions>): void {
    return this.request_(fetchOptions);
  }

  /**
   * Reset the machine to its initial state without notifying, and clean up existing context (include raw response) and state.
   */
  clean(): void {
    this.clean_();
  }
}

export type {ServerContextState as ManualReloadServerContextState};
