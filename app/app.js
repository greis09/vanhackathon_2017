const logger = require('./lib/logger');
const pubSub = require('./lib/pub-sub');
const events = require('./lib/events');

logger.info('app is here');
logger.error('app is here');
logger.warn('app is here');
logger.debug('app is here');
logger.silly('app is here');
logger.info('app is here');

pubSub.publish(events.app.ready);
pubSub.publish(events.app.ready, {payload: true});
