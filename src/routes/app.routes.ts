import { Router } from 'express';

import PersonController from '@controllers/personController';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send('Gerador de usuários para teste');
});

routes.get('/person', PersonController.index);

export default routes;
