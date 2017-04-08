# vanhackathon_2017

#### npm tasks: #### 
* test: run unit tests
* dev : run nodemon while develpment
* prd: run app as production mode (without nodemon)
* lint: run code quality tool

##### To run tasks: #### 
```sh 
#npm run <task-name>
npm run lint
```
#### Editor configuration: #### 
We're using editorconfig to manage editor config. If you're IDE does not have native support, please check if it has support:
[editorconfig.com](http://editorconfig.org/#download)

#### Code Quality: ####
Add Eslint live check for your IDE to prevent errors. Otherwise you'll know the errors only when pushing your code and waste more time to fix everything.

#### PubSub module:
```js
class PubSub {
  /**
   * @param eventName {String}
   * @param handler {Function}
   */
  subscribe (eventName, handler) {}
  
  /**
   *
   * @param eventName {String}
   * @param parameters {*}
   */
  publish (eventName, ...parameters) {}
}
```

