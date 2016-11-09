# restify-cors

> CORS middleware with full [W3C spec](www.w3.org/TR/cors) support.

[![NPM](http://img.shields.io/npm/v/restify-cors.svg?style=flat)](https://npmjs.org/package/restify-cors-middleware)
[![License](http://img.shields.io/npm/l/restify-cors.svg?style=flat)](https://github.com/TabDigital/restify-cors-middleware)

[![Build Status](http://img.shields.io/travis/ManuelRauber/restify-cors.svg?style=flat)](http://travis-ci.org/ManuelRauber/restify-cors)
[![Dependencies](http://img.shields.io/david/ManuelRauber/restify-cors.svg?style=flat)](https://david-dm.org/ManuelRauber/restify-cors)
[![Dev dependencies](http://img.shields.io/david/dev/ManuelRauber/restify-cors.svg?style=flat)](https://david-dm.org/ManuelRauber/restify-cors)
[![Peer dependencies](http://img.shields.io/david/peer/ManuelRauber/restify-cors.svg?style=flat)](https://david-dm.org/ManuelRauber/restify-cors)

This project has been forked from https://github.com/TabDigital/restify-cors-middleware.

## Changes

* Supports restify 4.2
* Usage with TypeScript

## Usage

```js
var corsMiddleware = require('restify-cors');

var cors = corsMiddleware({
  preflightMaxAge: 5, // Optional
  origins: ['http://api.myapp.com', 'http://web.myapp.com'], // defaults to ['*'] to allow all origins
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight);
server.use(cors.actual);
```

## Compliance to the spec

See [unit tests](https://github.com/ManuelRauber/restify-cors/tree/master/test)
for examples of preflight and actual requests.
