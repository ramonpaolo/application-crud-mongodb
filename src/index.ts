/* eslint-disable import/no-unresolved */
import express from 'express';

// Config
// eslint-disable-next-line import/extensions
import MongoDB from './config/mongodb';

// Routes
// eslint-disable-next-line import/extensions
import itemRoute from './routes/itemRoute';

const app = express();

const PORT = process.env.PORT || 3000;

(async () => {
  await MongoDB.connection();
})();

app.use(express.json());

app.use(itemRoute);

app.listen(PORT);
