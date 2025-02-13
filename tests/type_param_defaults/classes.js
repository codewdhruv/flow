/* @flow */

class A<T> {
  p: T;
  constructor(p: T) {
    this.p = p;
  }
}

// Test out simple defaults
class B<T = string> extends A<T> {}

var b_number: B<number> = new B(123);
var b_void: B<void> = new B();
var b_default: B<> = new B('hello');

(b_number.p: boolean); // Error number ~> boolean
(b_void.p: boolean); // Error void ~> boolean
(b_default.p: boolean); // Error string ~> boolean

class C<T: ?string = string> extends A<T> {}

var c_number: C<number> = new C(123); // Error number ~> ?string
var c_void: C<void> = new C();
var c_default: C<> = new C('hello');

(c_void.p: boolean); // Error void ~> boolean
(c_default.p: boolean); // Error string ~> boolean

class D<S, T = string> extends A<T> {}
var d_number: D<mixed, number> = new D(123);
var d_void: D<mixed, void> = new D();
var d_default: D<mixed> = new D('hello');
var d_too_few_args: D<> = new D('hello'); // Error too few tparams
var d_too_many: D<mixed, string, string> = new D('hello'); // Error too many tparams

(d_number.p: boolean); // Error number ~> boolean
(d_void.p: boolean); // Error void ~> boolean
(d_default.p: boolean); // Error string ~> boolean

class E<S: string, T: number = S> {} // Error: string ~> number
class F<S: string, T: S = number> {} // Error: number ~> string

class G<S: string, T = S> extends A<T> {}

var g_default: G<string> = new G('hello');

(g_default.p: boolean); // Error string ~> boolean

class H<S = T, T = string> {} // Error - can't refer to T before it's defined

class I<T: ?string = *> extends A<T> {}

var i_number: I<number> = new I(123); // Error number ~> ?string
var i_void: I<void> = new I();
var i_default: I<> = new I('hello');
