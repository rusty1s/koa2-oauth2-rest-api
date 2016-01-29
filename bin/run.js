'use strict';

import http from 'http';
import app from '../server';

const httpServer = http.createServer(app.callback());

const port = 3000;
httpServer.listen(
  process.env.PORT || port,
  () => console.log(`Server started on port ${httpServer.address().port}`));