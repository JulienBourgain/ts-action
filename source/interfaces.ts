/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/ts-action
 */

export interface Action<T extends string> {
    type: T;
}

export interface ActionCreator<T extends string, A extends Action<string>> {
    type: T;
    new(...args: any[]): A;
}
