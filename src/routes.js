import { Router } from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './graphql/shema';

const routes = Router();

routes.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

routes.use('/hello', (req, res) => {
  return res.send({ hello: 'Helo world' });
});

export default routes;
