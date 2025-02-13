// @flow

declare function myFun(this: {prop: number}): string;
declare function myPolyFun<T>(this: {prop: number}, x: T): T;

// All ok - {prop: 123} is a subtype of {prop: number}
myFun.bind({prop: 123});
myFun.apply({prop: 123}, ([]: Array<number>));
myFun.call({prop: 123});
myPolyFun.bind({prop: 123});
myPolyFun.apply({prop: 123}, ([]: Array<number>));
myPolyFun.call({prop: 123});

myFun.bind({prop: true}); // Error - boolean ~> number
myFun.apply({prop: true}, ([]: Array<number>)); // Error - boolean ~> number
myFun.call({prop: true}); // Error - boolean ~> number
myPolyFun.bind({prop: true}); // Error - boolean ~> number
myPolyFun.apply({prop: true}, ([]: Array<number>)); // Error - boolean ~> number
myPolyFun.call({prop: true}); // Error - boolean ~> number

myFun.bind(); // Error - void ~> number
myFun.apply(); // Error - void ~> number
myFun.call(); // Error - void ~> number
myPolyFun.bind(); // Error - void ~> number
myPolyFun.apply(); // Error - void ~> number
myPolyFun.call(); // Error - void ~> number

// No additional annotations required
export default {
  myFun,
  myPolyFun,
};
