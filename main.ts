import { Observable } from "rxjs";

var numbers = [ 1, 2, 3, 4 ];

var source = Observable.from(numbers);

source.reduce((x, y) => {
    console.log(`x is ${x}, y is ${y}`);
    return x + y;
}, 0).subscribe(
    value => console.log(`final value is ${value}`)
);
