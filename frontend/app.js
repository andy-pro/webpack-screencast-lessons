'use strict';

document.getElementById('loginButton').onclick = function() {

  require.ensure([], function(require) {
    let login = require('./login');
    login('from app to login');
  }, 'auth');

};

document.getElementById('logoutButton').onclick = function() {

  require.ensure([], function(require) {
    let logout = require('./logout');
    logout('from app to logout');
  }, 'auth');

};
