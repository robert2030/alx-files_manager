import 'dotenv/config';
import express from 'express';
// eslint-disable-next-line import/extensions
import routes from './routes/index.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
