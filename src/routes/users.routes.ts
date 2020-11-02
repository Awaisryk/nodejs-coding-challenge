const router = require('express').Router();
import { wrapAsync } from '../common/defs';
import { usersHelper } from '../libs/users-helper';
import { BadRequestError } from '../response-helpers/bad-request-error';
import { NotFoundError } from '../response-helpers/not-found-error';
import { AlreadyExistsError } from '../response-helpers/already-exists-helper';

router.get('/', wrapAsync(async (req: any, res: any) => {
  let results = await usersHelper.list();
  if (results.length === 0) {
    throw new NotFoundError();
  }
  const items = results.map(item => ({ ...item.props }));
  const response = {
    count: items.length,
    items
  }
  res.status(200).json(response);
}))

router.post('/', wrapAsync(async (req: any, res: any) => {
  const props = req.body;
  if (!props || Object.keys(props).length === 0) {
    throw new BadRequestError();
  }
  let doc = await usersHelper.create(props);
  if (!doc) {
    throw new BadRequestError();
  }
  if (Object.keys(doc).length === 0) {
    throw new AlreadyExistsError();
  }
  res.status(200).json(doc.props);
}));

router.patch('/:id', wrapAsync(async (req: any, res: any) => {
  const props = req.body;
  if (!req.params.id || !props || Object.keys(props).length === 0) {
    throw new BadRequestError();
  }
  const id = req.params.id;
  let doc = await usersHelper.update(id, props);
  if (!doc) {
    throw new BadRequestError();
  }
  if (Object.keys(doc).length === 0) {
    throw new AlreadyExistsError();
  }
  res.status(200).json(doc.props);
}));

router.delete('/:id', wrapAsync(async (req: any, res: any) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequestError();
  }
  let results = await await usersHelper.delete(id);
  if (!results) {
    throw new BadRequestError();
  }
  res.status(200).json({});
}))

export default router;