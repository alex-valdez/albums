import React from 'react';
import { AppRegistry } from 'react-native'
import App from './index.js'
// Had you placed index.js in another folder like `./app`, you could instead do your import with this shorthand:
// import ReactApp from './app'

AppRegistry.registerComponent('Albums', () => App)