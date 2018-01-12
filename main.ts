import { Observable } from "rxjs";

var numbers = [ 1, 2, 3, 4 ];

var source = Observable.from(numbers);

source.reduce((x, y) => x + y).subscribe(
    value => console.log(`final value is ${value}`)
);
