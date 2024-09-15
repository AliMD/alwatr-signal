import {AlwatrJsonFetchStateMachineBase} from './jfsm-base.js';

import type {FetchOptions, ServerRequestState} from './base.js';
import type {Json} from '@alwatr/type-helper';

export class AlwatrJsonFetchStateMachine<T extends Json = Json> extends AlwatrJsonFetchStateMachineBase<T> {
  /**
   * Current state.
   */
  get state(): ServerRequestState {
    return this.message_.state;
  }

  get jsonResponse(): T | undefined {
    return this.jsonResponse_;
  }

  get rawResponse(): Response | undefined {
    return this.rawResponse_;
  }

  request(options?: Partial<FetchOptions>): void {
    return this.request_(options);
  }

  /**
   * Reset the machine to its initial state without notifying, and clean up existing json response and state.
   */
  reset(): void {
    this.resetToInitialState_();
  }
}
