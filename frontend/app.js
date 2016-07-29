'use strict';


// let pathname = location.pathname;
// console.log(pathname);
//
// let moduleName = pathname.slice(1);
// console.log(moduleName);

let moduleName = location.pathname.slice(1);

console.log(moduleName);

if (moduleName) {
  let route = require('./routes/' + moduleName);
  route();
}
