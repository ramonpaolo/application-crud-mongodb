/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';

// Controllers
import ItemSetController from '../controllers/itemController';

const app = express();

const item = new ItemSetController();

app.route('/').get(async (req, res) => {
  const response = await item.getItem(req.body.item);
  if (Object(response).error === undefined && response !== null) return res.status(201).send({ status: 'success', data: response });
  return res.status(400).send({ status: 'error' });
}).post(async (req, res) => {
  if (req.body.item === null) return res.status(400).send({ status: 'error', message: 'Put a item' });
  const response = await item.addItem(req.body.item);
  if (Object(response).error === undefined) return res.status(201).send({ status: 'success', data: Object(response) });
  return res.status(400).send({ status: 'error' });
}).put(async (req, res) => {
  const response = await item.setItem(req.body.item);
  // eslint-disable-next-line no-underscore-dangle
  if (response) return res.status(201).send({ status: 'success', message: `${req.body.item._id} updated with success`, data: await item.getItem(req.body.item) });
  return res.status(400).send({ status: 'error' });
})
  .delete(async (req, res) => {
    const response = await item.deleteItem(req.body.item);
    // eslint-disable-next-line no-underscore-dangle
    if (response) return res.status(201).send({ status: 'success', message: `${req.body.item._id} deleted with success`, data: response });
    return res.status(400).send({ status: 'error' });
  });

export default app;
