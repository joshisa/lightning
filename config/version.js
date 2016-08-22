
var url = require('url');
var config = require('./config');

module.exports = {
    'development': {
      'version': config.version
    },
    'test': {
      'version': config.version
    },
    'test-sqlite': {
      'version': config.version
    },
    'production': {
      'version': config.version
    }
};
