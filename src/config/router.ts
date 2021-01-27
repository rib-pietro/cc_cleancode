import { Router, Request, Response } from 'express';
import { RouterApiController } from './router.api';

const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
  response.send('It works mtf!');
});
router.use('/api', RouterApiController);

export const RouterController: Router = router;