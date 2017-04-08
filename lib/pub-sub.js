class PubSub {
  constructor () {
    this.events = {};
  }

  /**
   *
   * @param eventName {String}
   * @param handler {Function}
   */
  subscribe (eventName, handler) {
    if (typeof handler !== 'function') {
      return;
    }

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const alreadyListening = this.events[eventName].indexOf(handler) >= 0;

    if (!alreadyListening) {
      this.events[eventName].push(handler);
    }
  }

  /**
   *
   * @param eventName {String}
   * @param parameters {*}
   */
  publish (eventName, ...parameters) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((handler) => {
        handler.apply(this, parameters);
      });
    }
  }
}

module.exports = new PubSub();
