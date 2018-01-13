import { Observable } from "rxjs";

var edits = [
    {
        id: 1,
        name: "Betty"
    },
    {
        id: 2,
        name: "Ringo"
    },
    {
        id: 3,
        name: "Steve"
    }
];

var source: Observable<{ id, name }> = Observable.from(edits);

function dump({ count, names }) {
    console.log(`count is ${count}`);
    for (var item of names) {
        console.log(item);
    }
}
source.reduce((acc, value) => {
    // id is ignored
    acc.count += 1;
    acc.names.push(value.name);
    dump(acc);
    return acc;
}, { count: 0, names: [] }).subscribe(
    value => {
        console.log('final value');
        dump(value);
    });
