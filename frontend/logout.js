'use strict';

module.exports = function(message) {

  if (NODE_ENV == 'development') {
    console.log('received message by logout:', message);
  }

  alert(`Logout received: ${message}`);

};
