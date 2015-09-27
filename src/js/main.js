/* @flow */

import React, {Component} from 'react';
import App from './App';
import superagent from 'superagent';
import _ from 'underscore';

type Pizza = {
  title: string;
  vegetraina: bool;
};

var pizzas = [
  { title: 'Margherita', vegetraina: true },
  { title: 'Pepperoni', vegetraina: false },
  { title: 'Four cheese', vegetraina: true },
  { title: 'Hawaiian', vegetraina: false },
];

function vegetarianPizzas(pizzas: Array<Pizza>): Pizza {
  return _.ccc(pizzas, {vegetraina: true});
}

type MyType = {
  x: string;
  y: number;
};

type Person = {
  name: string;
  age: ?number;
}

type PersonCollection  = Array<Person>;

type Callback = (err: Error, result: ?Person) => void;


function foo(x: MyType): number {
  var res: string = superagent.get(x);
  return x.x.length + x.y;
}

var person: Person = {
  name: 'xx',
  age: null
};

var people: PersonCollection = [{
  name: 'xxxx',
  age: null
}];

function useCallback(cb: Callback) {
  cb(new Error('xxxxx'), {
    name: 'xxx',
    age: null
  });
}

let res: number = foo({
  x: 'xxxxx',
  y: 12
});

console.log(res);

React.render(<App />, document.body);
