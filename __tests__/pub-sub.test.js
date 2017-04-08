const pubsub = require('./../lib/pub-sub');

test('pubsub exists', () => {
  expect(pubsub).toBeDefined();
});

test('pubsub works', () => {
  const handler = jest.fn();
  const payload = {payload: true};

  pubsub.subscribe('event', handler);
  pubsub.subscribe('event', handler);

  pubsub.publish('event');
  pubsub.publish('event', payload);

  expect(handler.mock.calls.length).toBe(2);
  expect(handler.mock.calls[1][0]).toBe(payload);
});
