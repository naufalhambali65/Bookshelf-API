/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const Hapi = require('@hapi/hapi');
const Qs = require('qs');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    query: {
      parser: (query) => Qs.parse(query),
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server start at ${server.info.uri}`);
};

init();
