'use strict';

import requireDir from 'require-dir';
import compose from 'koa-compose';
import Router from 'koa-router';

import db from '../db';

const routes = requireDir('./routes');

export default function api() {
  const router = new Router({
    prefix: '/api',
  });

  Object.keys(routes).forEach(name => {
    const route = routes[name];
    route.default(router, db);
  });

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}