'use strict';

module.exports = function(message) {

  if (NODE_ENV == 'development') {
    console.log('received message by login:', message);
  }

  alert(`Login received: ${message}`);

};
