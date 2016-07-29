'use strict';

module.exports = function(message) {

  if (NODE_ENV == 'development') {
    console.log('received local message:', message);
  }

  alert(`Received: ${message}`);

};
