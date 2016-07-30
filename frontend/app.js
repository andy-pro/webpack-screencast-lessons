'use strict';

// let _ = require('lodash');

let users = [
  {id: "abcd", name: "Vasya"},
  {id: "defa", name: "Petya"},
  {id: "1234", name: "Masha"},
  {id: "5678", name: "Medved"}
];

console.log(_.map(users, 'name'));
