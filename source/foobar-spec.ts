/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/ts-action
 */

import { action, base, payload, props } from "../dist/action";

export const usingBase = {
    Bar: action("[foobar] BAR", base(class { constructor(public bar: number) {} })),
    Foo: action("[foobar] FOO", base(class { constructor(public foo: number) {} }))
};

export const usingEmpty = {
    Bar: action("[foobar] BAR"),
    Foo: action("[foobar] FOO")
};

export const usingPayload = {
    Bar: action("[foobar] BAR", payload<{ bar: number }>()),
    Foo: action("[foobar] FOO", payload<{ foo: number }>())
};

export const usingProps = {
    Bar: action("[foobar] BAR", props<{ bar: number }>()),
    Foo: action("[foobar] FOO", props<{ foo: number }>())
};
