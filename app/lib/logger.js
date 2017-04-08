const winston = require('winston');
const pubSub = require('./pub-sub');
const events = require('./events');

const Logger = new (winston.Logger)({
  exitOnError: false,
  transports: [
    new (winston.transports.Console)({
      name: 'dev',
      level: 'silly',
      handleExceptions: true,
      timestamp: function () {
        let date;
        date = new Date();
        return date.toJSON();
      },
      formatter: function (options) {
        // Return string will be passed to logger.
        return options.timestamp() + ' [' + options.level.toUpperCase() + '] ' + (options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
      }
    })
    // when it goes to production
    /*,
     new (winston.transports.Console)({
     name: 'prd',
     level: 'error',
     timestamp: function () {
     return Date.now();
     },
     formatter: function (options) {
     // Return string will be passed to logger.
     return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') +
     (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
     }
     })*/
  ]
});

function eventHandlerExample (payload) {
  'use strict';
  Logger.info('eventHandlerExample called when app published');
  Logger.info('payload', payload);
}

pubSub.subscribe(events.app.ready, eventHandlerExample);

module.exports = Logger;
